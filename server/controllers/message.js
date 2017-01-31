 var Message = require('../models/message');

 exports.getComents = function (req, res, next){
     Message.find( function(err, messages){
         if (err){
             return res.status(500).json({
                 message: 'Erro ao trazer o dado do banco!!!'
             });
         }
         res.status(200).json({
             data: messages
         });
     });
 };

 exports.postComents = function (req, res, next) {
     var message = new Message({
         gostei: req.body.gostei,
         userName: req.body.userName,
         comentario: req.body.comentario
     });
     message.save(function(err, result) {
         if (err) {
             return res.status(500).json({
                 message: 'Erro ao salvar a mensagem!'
             });
         }
         res.status(201).json({
             message: 'Mensagem salva com sucesso!'
         });
     });
 };


 exports.getIndice = function (re, res, next) {
     Message.find().count( function(err, indice){
         if (err){
             return res.status(500).json({
                 message: 'Erro ao trazer o dado do banco!!!'
             });
         }
         res.status(200).json({
             data: indice
         });
     });

 };

 exports.getIndiceGostei = function (re, res, next) {
     Message.find({'gostei':'Gostei'}).count(function(err, count){
         if (err){
             return res.status(500).json({
                 message: 'Erro ao trazer o dado do banco!!!'
             });
         }
         res.status(200).json({
             data: count
         });
     });

 };

 exports.getIndiceNGostei = function (re, res, next) {
     Message.find({'gostei':'Não gostei'}).count(function(err, count){
         if (err){
             return res.status(500).json({
                 message: 'Erro ao trazer o dado do banco!!!'
             });
         }
         res.status(200).json({
             data: count
         });
     });

 };