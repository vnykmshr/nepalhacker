module.exports = function (app) {
  var locals = {
    environment: app.settings.env,
    apptitle: 'nepalhacker',
    pretty: (app.settings.env !== 'production'),
  };

  app.set('view engine', 'jade');

  app.locals(locals);
};
