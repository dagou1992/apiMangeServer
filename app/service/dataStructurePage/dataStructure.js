const Service = require('../../core/base_service');
const { nowTimestamp } = require('../../util/time');

class DataStructureService extends Service {
  async query() {
    try {
      const result = await this.model('DataStructure').find(
        {
          deleted: false,
        },
        { _id: 0, __v: 0 },
      );
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }
  async create(data) {
    try {
      const id = await this.createNewId('DataStructure');
      const env = await this.model('DataStructure').create({
        id,
        ...data,
        createdTime: nowTimestamp(),
        updatedTime: nowTimestamp(),
        deleted: false,
      });
      if (!env) {
        throw this.error('create DataStructure failed');
      }
      return env;
    } catch (e) {
      this.throwError(e);
    }
  }
  async update(data) {
    const { id, ...value } = data;
    const result = await this.commonUpdate('dataStructurePage.dataStructure', {
      id,
      data: value,
    });
    return result;
  }

  async delete(id) {
    try {
      const result = await this.update({
        id,
        deleted: true,
      });
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }
}

module.exports = DataStructureService;
