module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('api_server');
  return conn.model(
    'DataStructure',
    new Schema({
      id: {
        type: Number,
        index: true,
        unique: true,
      },
      name: String,
      remark: String,
      data: Array,
      deleted: Boolean,
      createdTime: Number,
      updatedTime: Number,
    }),
    'dataStructure',
  );
};
