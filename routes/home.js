/**
 * Home controller
 */

var home = {
  index: function index(req, res, next) {
    res.locals.title = 'home';
    res.render('index');
  }
};

module.exports = home;
