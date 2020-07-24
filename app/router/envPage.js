module.exports = app => {
  const { router, controller } = app;

  router.get('/api/envPage', controller.envPage.index.query);
  router.post('/api/envPage', controller.envPage.index.create);
  router.put('/api/envPage', controller.envPage.index.update);
  router.delete('/api/envPage/:id', controller.envPage.index.delete);
};
