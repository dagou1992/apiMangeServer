'use strict';

const { nowTimestamp } = require('../util/time');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('api_server');
  return conn.model(
    'IdList',
    new Schema({
      name: { type: String, index: true, unique: true },
      seq: Number,
      updated_time: { type: Number, default: nowTimestamp },
    }),
    'id_list',
  );
};
