const Service = require('../../core/base_service');
const { nowTimestamp } = require('../../util/time');

class TestHistoryService extends Service {
  async query(data) {
    try {
      const res = await this.model('History').find(
        { ...data, deleted: false },
        { _id: 0, __v: 0 },
      );
      return res;
    } catch (err) {
      this.throwError(err);
    }
  }
  async create({ path, type, requestParam }) {
    try {
      const id = await this.createNewId('History');
      let history = await this.query({ path, type });
      if (history.length === 0) {
        history = await this.model('History').create({
          id,
          path,
          type,
          requestParam,
          createdTime: nowTimestamp(),
          updatedTime: nowTimestamp(),
          deleted: false,
        });
        if (!history) {
          throw this.error('create history failed');
        }
      }
      return history;
    } catch (err) {
      this.throwError(err);
    }
  }

  async delete() {
    try {
      const list = await this.model('History').find({ deleted: false });
      for (const item of list) {
        await this.model('History').findOneAndUpdate(
          { id: item.id, deleted: false },
          { deleted: true, updateTime: nowTimestamp() },
        );
      }
      return list;
    } catch (err) {
      this.throwError(err);
    }
  }
}

module.exports = TestHistoryService;
