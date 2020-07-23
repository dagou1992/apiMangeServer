module.exports = app => {
  const { router, controller } = app;

  router.post('/api/testPage', controller.testPage.index.index);

  router.get('/api/testPage/history', controller.testPage.history.index);
  router.post('/api/testPage/history', controller.testPage.history.create);
  router.delete('/api/testPage/history', controller.testPage.history.delete);
};
