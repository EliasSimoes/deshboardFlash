var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    gostei: {type: String, require:true},
    userName: {type: String, require:true},
    comentario: {type: String, require: true}
});

module.exports = mongoose.model('Message', schema);