const mongoose = require('mongoose');

async function connect(){
    mongoose.connect('mongodb://127.0.0.1:27017/f8_hoc_nodejs')
  .then(() => console.log('Connected!'));
}

module.exports={connect};