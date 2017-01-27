var express = require('express');
var router = express.Router();
var Message = require('../models/message');


router.get('/', function(req, res){
    res.render('index');
});

// trazer do banco
router.get('/messages', function (req, res, next) {
    Message.find(function (err, messages) {
        if (err){
            return res.status(500).json({
                message: 'Erro ao trazer o dado do banco!!!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

//enviar
router.post('/messages', function (req, res, next) {
    var message = new Message({
        gostei: req.body.gostei,
        userName: req.body.userName,
        comentario: req.body.comentario
    });
    message.save(function (err, result) {
        if (err){
            return res.status(500).json({
                message: 'Erro ao salvar a mensagem!'
            });
        }
        res.status(201).json({
            message: 'Mensagem salva com sucesso!'
        });
    });
});





module.exports = router;