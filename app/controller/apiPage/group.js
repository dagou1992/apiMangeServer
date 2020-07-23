const Controller = require('../../core/base_controller');

class GroupController extends Controller {
  async query() {
    const { ctx } = this;
    try {
      const result = await ctx.service.apiPage.group.query(ctx.query);
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async create() {
    const { ctx } = this;
    ctx.validate({
      name: 'string',
    });
    const result = await ctx.service.apiPage.group.create(ctx.request.body);
    return this.success(result);
  }

  async update() {
    const { ctx } = this;
    const result = await ctx.service.apiPage.group.update(ctx.request.body);
    return this.success(result);
  }

  async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    const result = await ctx.service.apiPage.group.delete(id);
    return this.success(result);
  }
}

module.exports = GroupController;
