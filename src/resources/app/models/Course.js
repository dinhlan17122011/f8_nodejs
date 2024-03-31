const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    name: { type: String },
    Tieu_de: { type: String},
    img: { type:String },
    createdAt: { type: Date , default:Date.now },
    updatedAt: { type: Date , default:Date.now },
});

module.exports= mongoose.model('f8_hoc_nodejs',BlogPost)