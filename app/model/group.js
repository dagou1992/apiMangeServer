module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('api_server');
  return conn.model(
    'Group',
    new Schema({
      id: {
        type: Number,
        index: true,
        unique: true,
      },
      name: {
        type: String,
        index: true,
      },
      list: Array,
      deleted: Boolean,
      createdTime: Number,
      updatedTime: Number,
    }),
    'group',
  );
};
