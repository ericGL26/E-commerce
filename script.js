var divcentralconteiner = document.getElementById('div_central_conteiner_id')
var butao_mandar_user = document.getElementById('butao_mandar_user')
var butao_cadastrar_user = document.getElementById('butao_cadastrar_user')
var butao_login = document.getElementById('butao_login')
var contador = 0;
var sidebar = document.getElementById('sidebar')
var butao_expandir = document.getElementById('butao_expandir')
var nomeuser = document.getElementById('nome_user')
var nomeusuario = localStorage.getItem('nomeuser')
var idusuariolocal = localStorage.getItem('iduser')


//PEGAR DADOS DO BANCO DE DADOS E MOSTRAR NA TELA
function PegarDadosBancoMostrarTela() {
    fetch('https://ecommerce.ericgomess.repl.co/mandardadosfront').then((res) => res.json())
    .then(data => {

//VOU SEPARAR O ID DOS USUARIOS
//VOU COMPARAR COM O ID DO ANUNCIO SE FOR IGUAL VEM A PROXIMA ETAPA
//MOSTRAR O ANUNCIO NA TELA COM O NOME DO USUARIO CORRESPONDENTE
//COLOCAR TUDO EM UM FOR PARA TENTAR O ID DO USUARIO COM TODOS OS ANUNCIOS
      
      //SEPARANDO OS IDs DOS USUARIOS
      var idusuarios = Object.keys(data.Usuarios);
      var idAnunciosnome = Object.keys(data.Anuncios);
      //separando o id dos anuncios
      var listanomeanuncios = [];
      for (var i = 0; i < idAnunciosnome.length; i++) {
        var idanuncio = data.Anuncios[idAnunciosnome[i]].id;
        
        for (var j = 0; j < idusuarios.length; j++) {
          if (idanuncio == idusuarios[j]) {
            var iduser = idusuarios[j];
            var nomeanuncios = data.Usuarios[iduser];
            listanomeanuncios.push(nomeanuncios);
          }
        }
      }
console.log(listanomeanuncios)
          for (let chave in data.Anuncios) {
            if (data.Anuncios.hasOwnProperty(chave)) {
              let objeto = data.Anuncios[chave];
              var foto = objeto.foto;
              var nome = objeto.nome;
              var valor = objeto.preco;
            
              var divPrincipal = document.createElement('div');
              divPrincipal.id = 'div_central_conteiner';
              
              // Criar a div externa
              var divExterna = document.createElement('div');
              divExterna.style.display = 'flex';
              divExterna.style.height = '480px';
              divExterna.style.width = '400px';
              divExterna.style.backgroundColor = 'rgb(237, 236, 236)';
              divExterna.style.borderRadius = '20px';
              divExterna.style.marginLeft = '30px';
              divExterna.style.border = '2px solid black';
              divExterna.style.flexDirection = 'column';
              
              // Criar a div de foto do produto
              var divFotoProduto = document.createElement('div');
              var imgFoto = document.createElement('img');
              divFotoProduto.style.flexDirection = 'column';
              divFotoProduto.classList.add('div_foto_produto');
              divFotoProduto.appendChild(imgFoto)
              divFotoProduto.style.backgroundColor = 'white'
              imgFoto.src = foto;
              imgFoto.style.height = '200px'
              imgFoto.style.width = '200px'
              
              // Criar o elemento de nome do produto
              var nomeProduto = document.createElement('h2');
              nomeProduto.classList.add('nome_produto');
              nomeProduto.innerText = nome;
              
              // Criar o elemento de preço do produto
              var precoProduto = document.createElement('h2');
              precoProduto.innerText = 'Preco: ' + valor; // Inserir o preço desejado
              precoProduto.style.marginLeft = '20px'


              //CRIANDO O ELEMENTO DONO
              var donoproduto = document.createElement('h2');
              console.log(listanomeanuncios[contador].email)
              donoproduto.innerText = 'Dono: ' + listanomeanuncios[contador].email;
              donoproduto.style.marginLeft = '20px'
              contador += 1
              console.log(contador)

              // Criar o botão de compra
              var botaoComprar = document.createElement('button');
              botaoComprar.classList.add('butao_comprar');
              botaoComprar.innerText = 'Comprar';
              
              // Adicionar a div de foto do produto à div externa
              divExterna.appendChild(divFotoProduto);
              divExterna.style.marginBottom = '45px'
              
              //adicionando os elementos a div externa
              divExterna.appendChild(nomeProduto);
              divExterna.appendChild(precoProduto);
              divExterna.appendChild(botaoComprar);
              divExterna.appendChild(donoproduto);   
              // Adicionar a div externa à div principal
              divPrincipal.appendChild(divExterna);
              
              // Adicionar a div principal à página
              divcentralconteiner.appendChild(divPrincipal);

            }
          }
    })
  }

  
//CHAMANDO O A FUNCAO E MOSTRANDO OS ANUNCIOS QUE ESTAO NO BANCO DE DADOS
PegarDadosBancoMostrarTela()

var divcentralconteiner = document.getElementById('div_central_conteiner_id')
var butao_mandar_user = document.getElementById('butao_mandar_user')

//MANDANDO O USER PRA PAGINA DE FAZER UMA POSTAGEM
function redirecionarUser(){
    window.location.href = 'novoproduto.html';
}


//TIMER, NAO DEIXAR O USUARIO MANDAR MUITOS ANUNCIOS DE UMA VEZ
function TimerAnuncio(){
    desabilitarBotao()
    divmsg = document.createElement('div');
    divmsg.style.height = '70px'
    divmsg.style.width = '250px'
    divmsg.style.backgroundColor = 'red'
    h1 = document.createElement('h4');
    h1.innerText = 'Espere 5 segundos antes de postar novamente'
    divmsg.style.height = '70px';
    divmsg.style.width = '300px';
    divmsg.style.backgroundColor = 'red';
    divmsg.style.position = 'fixed';
    divmsg.style.top = '100px'; 
    divmsg.style.right = '10px';
    divmsg.style.display = 'flex';
    divmsg.style.alignItems = 'center'
    divmsg.appendChild(h1)
    h1.style.marginLeft = '20px'
    divmsg.style.borderRadius = '10px'
    divcentralconteiner.appendChild(divmsg)
    setTimeout(function() {
        divmsg.remove() // Habilita o botão após 5 segundos
      }, 5000);
}

//BUTAO CADASTRANDO USUARIO

function RedirecionarPagCadastro(){
  window.location.href = 'paginacadastro.html'
}

//redirecionar login 

function redirecionarlogin(){
  window.location.href = 'login.html'
}

//750h
//400w
function expandirSidebar(){
  if (sidebar.style.height == '750px' && sidebar.style.width == '400px'){
    sidebar.style.height = '50px'
    sidebar.style.width = '50px'
    sidebar.style.marginLeft = '1400px'
  }else{
    sidebar.style.height = '750px'
    sidebar.style.width = '400px'
    sidebar.style.marginLeft = '1040px'

  }
}

nomeuser.innerHTML = 'Usuario logado: ' + nomeusuario


function redirecionarmeuanuncio(){
  window.location.href = 'meusanuncios.html'
}

