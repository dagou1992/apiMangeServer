const rq = require('request-promise');
const p = require('path');
const fs = require('fs');
const pump = require('mz-modules/pump');
const Service = require('../../core/base_service');

class TestPageService extends Service {
  async request(data) {
    let { path, type, requestParam, stream } = data;
    const { header, body, query, rest } = requestParam;
    if (rest.length > 0) {
      path = rest.reduce((total, item) => (total += `/${item.value}`), path);
    }
    if (query.length > 0 && !path.includes('?')) {
      path += `?${path}`;
      path = query.reduce(
        (total, item) => (total += `${item.name}=${item.value}&`),
        path,
      );
    }
    const options = {
      uri: path,
      method: type,
      headers: header,
      resolveWithFullResponse: true,
    };
    if (body && Object.keys(body.data).length > 0) {
      const { data, model } = body;
      if (model === 'raw') {
        options.body = data;
        options.json = true;
      }
      if (model === 'form-data') {
        options.formData = data;
      }
      if (model === 'binary') {
        if (stream) {
          const target = p.join(
            this.config.baseDir,
            'app/public',
            stream.filename,
          );
          const writeStream = fs.createWriteStream(target);
          await pump(stream, writeStream);
          options.formData = { file: fs.createReadStream(target) };
        }
      }
      if (model === 'x-www-form-urlencoded') {
        options.form = data;
      }
    }
    const start = new Date().valueOf();
    let res;
    try {
      res = await rq(options);
    } catch (err) {
      res = err.response;
    }
    if (!res) {
      this.throwError(new Error('error'));
    }
    const { headers, body: body_res, statusCode, statusMessage, request } = res;
    if (stream) {
      // 删除临时文件
      fs.unlink(
        p.join(this.config.baseDir, 'app/public', stream.filename),
        err => {},
      );
    }
    return {
      headers,
      body:
        typeof body_res === 'string' &&
        headers['content-type'].includes('application/json')
          ? JSON.parse(body_res.replace(/↵/g, ''))
          : body_res,
      statusCode,
      statusMessage,
      originalHost: request.originalHost,
      time: new Date().valueOf() - start,
    };
  }
}

module.exports = TestPageService;
