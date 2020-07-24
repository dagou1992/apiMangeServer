module.exports = app => {
  const { router, controller } = app;

  router.get(
    '/api/dataStructurePage',
    controller.dataStructurePage.index.query,
  );
  router.post(
    '/api/dataStructurePage',
    controller.dataStructurePage.index.create,
  );
  router.put(
    '/api/dataStructurePage',
    controller.dataStructurePage.index.update,
  );
  router.delete(
    '/api/dataStructurePage/:id',
    controller.dataStructurePage.index.delete,
  );
};
