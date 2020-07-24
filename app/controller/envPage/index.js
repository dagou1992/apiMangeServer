const Controller = require('../../core/base_controller');

class EnvPageController extends Controller {
  async query() {
    const { ctx } = this;
    try {
      const result = await ctx.service.envPage.env.query();
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async create() {
    const { ctx } = this;
    try {
      ctx.validate({
        name: 'string',
        remark: 'string',
        host: 'string',
      });
      const result = await ctx.service.envPage.env.create(ctx.request.body);
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async update() {
    const { ctx } = this;
    try {
      const result = await ctx.service.envPage.env.update(ctx.request.body);
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async delete() {
    const { ctx } = this;
    try {
      const result = await ctx.service.envPage.env.delete(ctx.params.id);
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
}

module.exports = EnvPageController;
