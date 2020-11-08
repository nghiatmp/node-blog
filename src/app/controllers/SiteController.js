const Course = require('../models/Course');

class NewsController {
    //[GET] / news
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) return res.json(courses);
            return res.status(400).json({
                error: 'Error !!',
            });
        });
        // res.render('home');
    }

    //[GET] /news/slug;
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
