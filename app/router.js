'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/apiPage')(app);
  require('./router/testPage')(app);
  require('./router/envPage')(app);
  require('./router/dataStructurePage')(app);
};
