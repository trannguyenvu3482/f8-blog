const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);

  app.get('/redirect', (req, res) => {
    res.redirect('/');
  });
}

module.exports = route;