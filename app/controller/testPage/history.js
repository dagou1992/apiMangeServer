const Controller = require('../../core/base_controller');

class TestHistoryController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      const result = await ctx.service.testPage.history.query();
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }

  async create() {
    const { ctx } = this;
    try {
      ctx.validate({
        path: 'string',
        type: 'string',
        requestParam: 'object',
      });
      const result = await ctx.service.testPage.history.create(
        ctx.request.body,
      );
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }

  async delete() {
    const { ctx } = this;
    try {
      const result = await ctx.service.testPage.history.delete();
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
}

module.exports = TestHistoryController;
