const newsRouter = require('./news');
const siteRouter = require('./site');
function routes(app) {
    app.use('/news', newsRouter);

    app.use('/',siteRouter);

    app.get('*', (req, res) => {
        res.render('404');
    });
    
}

module.exports = routes;