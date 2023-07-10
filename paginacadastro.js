var email = document.getElementById('input_email_id')
var senha = document.getElementById('input_senha_id')
var butao_enviar = document.getElementById('butao_enviar_id')
//PARTE DE ENVIAR DADOS PRA API

var idale = null

function GerarIdAle(){
    var digitos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    for (var i = 0; i < 11; i++) {
        var indice = Math.floor(Math.random() * digitos.length);
        idale += digitos[indice]
    }

}
GerarIdAle()


function EnviarDadosAPI() {
    linkapi = 'https://ecommerce.ericgomess.repl.co/mandarcadastrodouser'
dado = {
    email: email.value,
    senha: senha.value,
}

fetch(linkapi, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(dado)
}).then(response => response.json())
.then(data => {
    console.log(data)
})
}
