var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    click: Array,
    hashtag: Array,
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Image', imageSchema, 'zzal');