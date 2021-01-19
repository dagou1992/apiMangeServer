module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/css/*', controller.home.file);
  router.get('/js/*', controller.home.file);
};
