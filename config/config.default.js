/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
  };

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '123',
      db: 0
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592621828095_845';

  config.mongoose = {
    clients: {
      api_server: {
        url: 'mongodb://localhost:27019',
        options: {
          useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true,
        },
      },
    },
  };

  // add your middleware config here
  config.middleware = ['errorHandler', 'magicSso'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
