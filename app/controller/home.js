'use strict';
const path = require('path');
const fs = require('fs');
const Controller = require('../core/base_controller');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const url = ctx.request.url;
    ctx.response.type = 'html';
    ctx.body = fs.readFileSync(
      path.resolve(__dirname, '../public/dist/index.html'),
    );
  }
  async file() {
    const { ctx } = this;
    const url = ctx.request.url;
    ctx.redirect('/public/dist/' + url);
  }
}

module.exports = HomeController;
