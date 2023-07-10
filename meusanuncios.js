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
            if (nomeanuncios.email == nomeusuario){
              listanomeanuncios.push(nomeanuncios);
            }
          }
        }
      }
//PARTE QUE CRIA OS ANUNCIOS
          for (let chave in data.Anuncios) {
            if (data.Anuncios.hasOwnProperty(chave)) {
              //esse é o id do anuncio console.log(data.Anuncios[chave].id)
              // esse é o id do usuario cadastrado console.log(idusuariolocal)
              if (data.Anuncios[chave].id == idusuariolocal) {
                
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
                imgFoto.style.marginLeft = '80px'
                
                // Criar o elemento de nome do produto
                var nomeProduto = document.createElement('h2');
                nomeProduto.classList.add('nome_produto');
                nomeProduto.innerText = nome;
                nomeProduto.style.marginLeft = '20px'
                
                // Criar o elemento de preço do produto
                var precoProduto = document.createElement('h2');
                precoProduto.innerText = 'Preco: ' + valor; // Inserir o preço desejado
                precoProduto.style.marginLeft = '20px'
                if (listanomeanuncios[contador].email == nomeusuario){
                  var campolixo = document.createElement('img')
                  campolixo.src = 'lixeira.png'
                  campolixo.style.height = '50px'
                  campolixo.style.width = '50px'
                  divExterna.appendChild(campolixo)
                  //PARTE DE DELETAR OS ANUNCIOS
                  campolixo.onclick = function(){
                    const url = 'https://ecommerce.ericgomess.repl.co/deletardados'
                    const dados = {
                      "id": chave
                    }
                    console.log(dados)
                    console.log(chave)
                    axios.post(url, {
                      headers: {
                        'dadoanuncio': JSON.stringify(dados),
                        'Content-Type': 'application/json'
                      }
                    })
                  }

                }
  
                //CRIANDO O ELEMENTO DONO
                var donoproduto = document.createElement('h2');
                donoproduto.innerText = 'Dono: ' + listanomeanuncios[contador].email;
                contador += 1
                donoproduto.style.marginLeft = '20px'
                
  
                // Criar o botão de compra
                var botaoComprar = document.createElement('button');
                botaoComprar.classList.add('butao_comprar');
                botaoComprar.innerText = 'Comprar';
                botaoComprar.style.marginLeft = '20px'
                botaoComprar.style.height = '30px'
                botaoComprar.style.width = '100px'
                botaoComprar.style.borderRadius = '10px'
                botaoComprar.style.backgroundColor = 'green'
  
  
                
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
          }
    })
  }

//CHAMANDO O A FUNCAO E MOSTRANDO OS ANUNCIOS QUE ESTAO NO BANCO DE DADOS
PegarDadosBancoMostrarTela()













/*var divcentralconteiner = document.getElementById('div_central_conteiner_id')
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
            if (nomeanuncios.email == nomeusuario){
              listanomeanuncios.push(nomeanuncios);
            }
          }
        }
      }
//PARTE QUE CRIA OS ANUNCIOS
          for (let chave in data.Anuncios) {
            if (data.Anuncios.hasOwnProperty(chave)) {
              //esse é o id do anuncio console.log(data.Anuncios[chave].id)
              // esse é o id do usuario cadastrado console.log(idusuariolocal)
              if (data.Anuncios[chave].id == idusuariolocal) {
                
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
                imgFoto.style.marginLeft = '80px'
                
                // Criar o elemento de nome do produto
                var nomeProduto = document.createElement('h2');
                nomeProduto.classList.add('nome_produto');
                nomeProduto.innerText = nome;
                nomeProduto.style.marginLeft = '20px'
                
                // Criar o elemento de preço do produto
                var precoProduto = document.createElement('h2');
                precoProduto.innerText = 'Preco: ' + valor; // Inserir o preço desejado
                precoProduto.style.marginLeft = '20px'
                if (listanomeanuncios[contador].email == nomeusuario){
                  var campolixo = document.createElement('img')
                  campolixo.src = 'lixeira.png'
                  campolixo.style.height = '50px'
                  campolixo.style.width = '50px'
                  divExterna.appendChild(campolixo)
                  //PARTE DE DELETAR OS ANUNCIOS
                  campolixo.onclick = function(){

                      data = {
                        nome: data.Anuncios[chave].nome,
                        preco: data.Anuncios[chave].preco,
                        id: data.Anuncios[chave].id
                      }

                      const options = {
                        method: 'POST',
                        headers: {  
                        'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
                      },
                      body: JSON.stringify(data) // Converte os dados em uma string JSON
                    };
                      
                    
                      fetch('https://ecommerce.ericgomess.repl.co/deletardados', options)

                    }

                }
  
  
                //CRIANDO O ELEMENTO DONO
                var donoproduto = document.createElement('h2');
                donoproduto.innerText = 'Dono: ' + listanomeanuncios[contador].email;
                contador += 1
                donoproduto.style.marginLeft = '20px'
                
  
                // Criar o botão de compra
                var botaoComprar = document.createElement('button');
                botaoComprar.classList.add('butao_comprar');
                botaoComprar.innerText = 'Comprar';
                botaoComprar.style.marginLeft = '20px'
                botaoComprar.style.height = '30px'
                botaoComprar.style.width = '100px'
                botaoComprar.style.borderRadius = '10px'
                botaoComprar.style.backgroundColor = 'green'
  
  
                
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
          }
    })
  }

//CHAMANDO O A FUNCAO E MOSTRANDO OS ANUNCIOS QUE ESTAO NO BANCO DE DADOS
PegarDadosBancoMostrarTela()

*/