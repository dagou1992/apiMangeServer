/* eslint valid-jsdoc: "off" */

'use strict';

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
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592621828095_845';

  config.mongoose = {
    clients: {
      api_server: {
        url: 'mongodb://192.168.3.110:27019/api_server',
        options: {
          useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true,
        },
      },
    },
  };

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
