module.exports = app => {
  const { router, controller } = app;

  router.get('/api/apiPage/group', controller.apiPage.group.query);
  router.post('/api/apiPage/group', controller.apiPage.group.create);
  router.put('/api/apiPage/group', controller.apiPage.group.update);
  router.delete('/api/apiPage/group/:id', controller.apiPage.group.delete);

  router.get('/api/apiPage', controller.apiPage.index.query);
  router.post('/api/apiPage', controller.apiPage.index.create);
  router.put('/api/apiPage', controller.apiPage.index.update);
  router.delete('/api/apiPage/:group/:id', controller.apiPage.index.delete);
};
