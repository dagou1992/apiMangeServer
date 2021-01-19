const Service = require('../../core/base_service');
const { nowTimestamp } = require('../../util/time');
const { getMarkdown } = require('../../util/markdown');

const fs = require('fs');
const path = require('path');

class GroupService extends Service {
  async query(data, onlyOne = false) {
    try {
      const result = await this.model('Group').find(
        {
          ...data,
          deleted: false,
        },
        { _id: 0, __v: 0 },
      );
      return onlyOne ? result[0] : result;
    } catch (e) {
      this.throwError(e);
    }
  }
  async create({ name }) {
    try {
      const id = await this.createNewId('Group');
      const group = await this.model('Group').create({
        id,
        name,
        list: [],
        createdTime: nowTimestamp(),
        updatedTime: nowTimestamp(),
        deleted: false,
      });
      if (!group) {
        throw this.error('create group failed');
      }
      return group;
    } catch (e) {
      this.throwError(e);
    }
  }

  async update(data) {
    const { id, ...value } = data;
    const result = await this.commonUpdate('apiPage.group', {
      id,
      data: value,
    });
    return result;
  }

  async export({ fileName: name, group, pageSize, pageIndex }) {
    const { config, ctx } = this;
    const param = { group, pageSize, pageIndex };
    const result = await ctx.service.apiPage.api.query(
      param,
      ctx.query.id !== undefined,
    );
    const fileName = `${name}.md`;
    const filePath = path.join(config.baseDir, 'app/public', fileName);
    await fs.writeFile(filePath, getMarkdown(result.data));
    ctx.attachment(fileName);
    ctx.set('Content-Type', 'application/octet-stream');
    setTimeout(() => fs.unlink(filePath, err => {}));
    return fs.createReadStream(filePath);
  }

  async delete(id) {
    try {
      const result = await this.update({
        id,
        deleted: true,
      });
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }
}

module.exports = GroupService;
