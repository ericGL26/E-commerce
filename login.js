var input_email = document.getElementById('input_email_id')
var input_senha_id = document.getElementById('input_senha_id')
//PEGAR TODOS OS USUARIOS EMAIL E SENHA
//VAMOS FAZER UM BLOCO IF COM UM FOR ANINHADO PARA COMPARAR TODOS OS USUARIOS COM O EMAIL E A SENHA QUE FOI DIGITADA
//A LOGICA SERA SE O BLOCO IF FOR VERDADEIRO BUSCAR O NOME DELE COM O ID QUE ESTA VINDO DA REQUISICAO NO DATA
//SE FOR IGUAL PRINTAR NO CANTO DA HOME O NOME DELE
function EntrarNaConta(){
    fetch('https://ecommerce.ericgomess.repl.co/mandardadosfront').then((res) => res.json())
    .then(data => {
        var idusuariosnome = Object.keys(data.Usuarios);
        for (var i = 0; i < idusuariosnome.length; i++) {
            var email = data.Usuarios[idusuariosnome[i]].email
            var senha = data.Usuarios[idusuariosnome[i]].senha
            if (input_email.value == email && input_senha_id.value == senha) {
                console.log(idusuariosnome[i])
                var nome = input_email.value
                localStorage.setItem('nomeuser', nome)
                localStorage.setItem('iduser', idusuariosnome[i])
                break
        }else {
            console.log('algo deu errado')
        }
    }})
}