const Controller = require('../../core/base_controller');

class DataStructurePageController extends Controller {
  async query() {
    const { ctx } = this;
    try {
      const result = await ctx.service.dataStructurePage.dataStructure.query();
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
        data: 'array',
      });
      const result = await ctx.service.dataStructurePage.dataStructure.create(
        ctx.request.body,
      );
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
  async update() {
    const { ctx } = this;
    try {
      const result = await ctx.service.dataStructurePage.dataStructure.update(
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
      const result = await ctx.service.dataStructurePage.dataStructure.delete(
        ctx.params.id,
      );
      return this.success(result);
    } catch (e) {
      ctx.throw(e);
    }
  }
}

module.exports = DataStructurePageController;
