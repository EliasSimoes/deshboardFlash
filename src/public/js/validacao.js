var coment = function (){
    var nome;
    var comentario;
    var gostei;

    nome = document.getElementById('nome').value;
    comentario = document.getElementById('comentario').value;
    if ($('#nao-gostei').is(':checked')){
        this.gostei = 'Não gostei';
    }else{
        this.gostei = 'Gostei';
    };
    return nome, comentario, gostei
}

module.exports = coment();
