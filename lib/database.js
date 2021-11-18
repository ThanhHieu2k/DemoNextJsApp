import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// var slug = require('mongoose-slug-generator'); // sử dụng thư viện để tự tạo một field trong document từ một field khac
// mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: {type: String, required: true}, 
});

// Course.plugin(mongooseDelete, { deletedAt: true , overrideMethods: 'all' }); // thực hiện plugin thư viện xóa và override lên các method của mongoose

module.exports = mongoose.models.courses || mongoose.model('Courses', Course);