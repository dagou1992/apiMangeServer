const Controller = require('../../core/base_controller');

class ApiPageController extends Controller {
  async query() {
    const { ctx } = this;
    let data = { ...ctx.query };
    if (ctx.query.group) {
      data.group = Number(ctx.query.group);
    }
    try {
      const result = await ctx.service.apiPage.api.query(
        data,
        ctx.query.id !== undefined,
      );
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async create() {
    const { ctx } = this;
    ctx.validate({
      name: 'string',
      path: 'string',
      group: 'number',
      type: 'string',
      requestParam: 'object',
      responseParam: 'object',
      responseExample: 'object',
    });
    const result = await ctx.service.apiPage.api.create(ctx.request.body);
    return this.success(result);
  }
  async update() {
    const { ctx } = this;
    const result = await ctx.service.apiPage.api.update(ctx.request.body);
    return this.success(result);
  }
  async delete() {
    const { ctx } = this;
    const { id, group } = ctx.params;
    const result = await ctx.service.apiPage.api.delete(id, group);
    return this.success(result);
  }
}

module.exports = ApiPageController;
