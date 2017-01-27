// var Message = require('../models/message');
// var mongoose = require('mongoose');
//
//
//
// export.getIndice = function (req, res, next) {
//     Message.find()
//            .where({'gostei':'Gostei'})
//            .count(function (err, count) {
//                 if (err) {
//                     return handleError(err);
//                 } else {
//                     res.status(500).json({
//                         message: 'Success',
//                         data: count
//                     })
//                     }
//            });
// };