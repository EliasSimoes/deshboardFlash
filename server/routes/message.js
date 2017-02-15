var express = require('express');
var router = express.Router();
var messageCtrl = require('../controllers/message');
// var Message = require('../models/message');


// trazer do banco
// router.get('/messages', function (req, res, next) {
//     Message.find(function (err, messages) {
//         if (err){
//             return res.status(500).json({
//                 message: 'Erro ao trazer o dado do banco!!!'
//             });
//         }
//         res.status(200).json({
//             data: messages
//         });
//     });
// });

// router.get('/messages', indice.getIndice);

//enviar
// router.post('/messages', function (req, res, next) {
//     var message = new Message({
//         gostei: req.body.gostei,
//         userName: req.body.userName,
//         comentario: req.body.comentario
//     });
//     message.save(function (err, result) {
//         if (err){
//             return res.status(500).json({
//                 message: 'Erro ao salvar a mensagem!'
//             });
//         }
//         res.status(201).json({
//             message: 'Mensagem salva com sucesso!'
//         });
//     });
// });

 router.get('/messages', messageCtrl.getComents);
 router.get('/messages/indice', messageCtrl.getIndice);
 router.get('/messages/indice1', messageCtrl.getIndiceGostei);
 router.get('/messages/indice2', messageCtrl.getIndiceNGostei);

router.post('/messages', messageCtrl.postComents);
router.delete('/messages/:id', messageCtrl.deleteMessage);



module.exports = router;