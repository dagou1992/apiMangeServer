const Service = require('egg').Service;
const { nowTimestamp } = require('../util/time');

class BaseService extends Service {
  error(message, returnStatus = 500) {
    const err = new Error(message);
    err.returnStatus = returnStatus;
    return err;
  }

  throwError(err) {
    this.ctx.throw(err);
  }

  model(model) {
    return this.ctx.model[model];
  }

  async createNewId(collection) {
    try {
      let dataIdResult = await this.model('IdList').findOne({
        name: collection,
      });
      if (!dataIdResult) {
        dataIdResult = await this.model('IdList').create({
          name: collection,
          seq: 0,
        });
      }
      const addDataIdResult = await this.model('IdList').findOneAndUpdate(
        { seq: { $ne: Number(dataIdResult.seq) + 1 }, name: collection },
        { $inc: { seq: 1 } },
        { new: true },
      );
      if (!addDataIdResult) {
        throw this.error(`create ${collection} new id failed`);
      }
      return addDataIdResult.seq;
    } catch (err) {
      this.throwError(err);
    }
  }

  async commonUpdate(type, param) {
    const { id, data } = param;
    const [group, model] = type.split('.');
    try {
      const newData = await this.model(
        model.replace(model[0], model[0].toUpperCase()),
      ).findOneAndUpdate(
        { id },
        { ...data, updated_time: nowTimestamp() },
        { new: true },
      );
      if (!newData) {
        throw this.error(`update ${model} ${id} failed`);
      }
      const result = await this.ctx.service[group][model].query({ id }, true);
      return result;
    } catch (err) {
      this.throwError(err);
    }
  }
}

module.exports = BaseService;
