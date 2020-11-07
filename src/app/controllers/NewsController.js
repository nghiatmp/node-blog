class NewsController {

    //[GET] / news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/slug;
    detail(req,res) {
        res.render('detail');
    }
}

module.exports = new NewsController;