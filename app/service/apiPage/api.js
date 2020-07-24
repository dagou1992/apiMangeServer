const Service = require('../../core/base_service');
const { nowTimestamp } = require('../../util/time');

class ApiPageService extends Service {
  async query(data, onlyOne = false) {
    try {
      let { value, pageIndex, pageSize, ...param } = data,
        total = 1;
      if (value) {
        param = {
          ...param,
          $or: [{ name: { $regex: value } }, { path: { $regex: value } }],
        };
      }
      let result = await this.model('Api').find(
        {
          ...param,
          deleted: false,
        },
        { _id: 0, __v: 0 },
      );
      if (!onlyOne) {
        total = result.length;
        result = await this.model('Api')
          .find(
            {
              ...param,
              deleted: false,
            },
            { _id: 0, __v: 0 },
          )
          .skip((Number(pageIndex) - 1) * Number(pageSize))
          .limit(Number(pageSize));
      }
      result = JSON.parse(JSON.stringify(result));
      for (const item of result) {
        const group = await this.service.apiPage.group.query(
          { id: item.group },
          true,
        );
        item.groupName = group.name;
      }
      return onlyOne ? result[0] : { data: result, total };
    } catch (e) {
      this.throwError(e);
    }
  }

  async create(data) {
    try {
      const id = await this.createNewId('API');
      const result = await this.model('Api').create({
        id,
        ...data,
        createdTime: nowTimestamp(),
        updatedTime: nowTimestamp(),
        deleted: false,
      });
      if (!result) {
        throw this.error('create api failed');
      }
      await this.commonUpdate('apiPage.group', {
        id: data.group,
        data: { $addToSet: { list: id } },
      });
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }

  async update(value) {
    const { id, ...data } = value;
    const result = await this.commonUpdate('apiPage.api', {
      id,
      data,
    });
    return result;
  }

  async delete(id, group) {
    try {
      const result = await this.update({
        id,
        deleted: true,
      });
      await this.commonUpdate('apiPage.group', {
        id: Number(group),
        data: { $pull: { list: Number(id) } },
      });
      return result;
    } catch (e) {
      this.throwError(e);
    }
  }
}

module.exports = ApiPageService;
