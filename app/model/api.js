module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('api_server');
  return conn.model(
    'Api',
    new Schema({
      id: {
        type: Number,
        index: true,
        unique: true,
      },
      path: {
        type: String,
        index: true,
      },
      name: {
        type: String,
        index: true,
      },
      group: {
        type: Number,
        index: true,
      },
      type: String,
      requestParam: Object,
      responseParam: Object,
      responseExample: Object,
      deleted: Boolean,
      createdTime: Number,
      updatedTime: Number,
    }),
    'api',
  );
};
