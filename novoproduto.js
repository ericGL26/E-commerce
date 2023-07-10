var input_nome_produto_id = document.getElementById('input_nome_produto_id')
var input_foto_produto_id = document.getElementById('input_foto_produto_id')
var input_preco_produto_id = document.getElementById('input_preco_produto_id')
var ultimoid = null
var fotobase64 = null;
function imagemfuncao() {
    var carregarimagem = input_foto_produto_id.files[0];
    var lerarquivo = new FileReader();
    lerarquivo.onload = function(arquivocarregado) {
        fotobase64 = arquivocarregado.target.result;
    };
    lerarquivo.readAsDataURL(carregarimagem);
}
//PEGANDO ID DO USUARIO NA API
fetch('https://ecommerce.ericgomess.repl.co/mandardadosfront').then((response) => response.json())
.then(data => {
    var chaves = Object.keys(data.Usuarios);
    ultimoid = localStorage.getItem('iduser')
    

})
function EnviarDadosAPI(){ 
    //ENVIANDO DADOS PARA API
const url = 'https://ecommerce.ericgomess.repl.co'
const data = {
    nome: input_nome_produto_id.value,
    preco: input_preco_produto_id.value,
    foto: fotobase64,
    id: ultimoid
}
fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
})
 .then(response => response.json())
 .then(data => {
    console.log(data)
 })

}
