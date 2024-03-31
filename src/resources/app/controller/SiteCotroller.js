const Course = require('../models/Course')


class SiteCotroller {
  index(req, res) {

    Course.find({}, function(err,corses){
        if(!err){
           res.json(corses)
        }else{
           res.status(400).json({error:'Loi!!!'})
        }
    })
  }
  timkiem(req, res) {
    res.render('tim-kiem');
  }
}

module.exports = new SiteCotroller();

