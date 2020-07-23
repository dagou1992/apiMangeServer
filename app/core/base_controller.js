const { Controller } = require('egg');

class BaseController extends Controller {
  success(data, code = 200) {
    this.ctx.body = {
      code,
      data,
    };
  }

  error(error, code = 500, returnCode = 500) {
    this.ctx.status = returnCode;
    this.ctx.body = {
      code,
      error,
    };
  }
}

module.exports = BaseController;
