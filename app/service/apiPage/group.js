const Service = require('../../core/base_service');
const { nowTimestamp } = require('../../util/time');

class GroupService extends Service {
  async query(data, onlyOne = false) {
    try {
      const result = await this.model('Group').find(
        {
          ...data,
          deleted: false,
        },
        { _id: 0, __v: 0 },
      );
      return onlyOne ? result[0] : result;
    } catch (e) {
      this.throwError(e);
    }
  }
  async create({ name }) {
    try {
      const id = await this.createNewId('Group');
      const group = await this.model('Group').create({
        id,
        name,
        list: [],
        createdTime: nowTimestamp(),
        updatedTime: nowTimestamp(),
        deleted: false,
      });
      if (!group) {
        throw this.error('create group failed');
      }
      return group;
    } catch (e) {
      this.throwError(e);
    }
  }

  async update(data) {
    const { id, name } = data;
    const result = await this.commonUpdate('apiPage.group', {
      id,
      data: { name },
    });
    return result;
  }

  async delete(id) {
    try {
      const result = await this.model('Group').findOneAndUpdate(
        { id, deleted: false },
        { deleted: true, updateTime: nowTimestamp() },
      );
      if (!result) {
        throw this.error(`delete group ${id} failed`);
      }
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }
}

module.exports = GroupService;
