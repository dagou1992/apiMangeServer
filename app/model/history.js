module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('api_server');
  return conn.model(
    'History',
    new Schema(
      {
        id: {
          type: Number,
          index: true,
          unique: true,
        },
        path: {
          type: String,
          index: true,
        },
        type: String,
        requestParam: Object,
        createdTime: Number,
        updatedTime: Number,
        deleted: Boolean,
      },
      { minimize: false },
    ),
    'history',
  );
};
