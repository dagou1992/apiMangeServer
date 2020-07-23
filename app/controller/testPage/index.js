const Controller = require('../../core/base_controller');
class TestPageController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      let data = ctx.request.body;
      if (Object.keys(data).length === 0) {
        const stream = await ctx.getFileStream();
        const { path, type, header, body, query, rest } = stream.fields;
        data = {
          path,
          type,
          requestParam: {
            header: JSON.parse(header),
            body: JSON.parse(body),
            query: JSON.parse(query),
            rest: JSON.parse(rest),
          },
          stream,
        };
      }
      const result = await ctx.service.testPage.index.request(data);
      return this.success(result);
    } catch (e) {
      return this.error('请求失败', 500, 200);
    }
  }
}

module.exports = TestPageController;
