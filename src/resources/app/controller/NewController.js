class NewCotroller {
  index(req, res) {
    res.render('/news');
  }
}

module.exports = new NewCotroller();

//const newcontroller = require('./NewCotroller')
