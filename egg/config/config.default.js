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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578468057284_8019';
  //引入 不需要 
  const writerList = require("./writerList")
  // add your middleware config here
  config.middleware = ["jwt"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {    // config/default.js
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'yuque',
    },
    app: true,
    agent: false
  };
  config.security = { // config/default.js
    csrf: false
  };
  config.jwt = writerList
  return {
    ...config,
    ...userConfig,
  };
};
