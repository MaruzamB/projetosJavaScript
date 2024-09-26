//logica para verificar tamanho da tela

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

function ajustaTamanhoTelaJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura, altura)
}

ajustaTamanhoTelaJogo()

var cronometro = setInterval(function(){
     
     tempo -= 1;
     if(tempo < 0){
          clearInterval(cronometro)
          clearInterval(criarMosca)
          alert('vitoria')
     }else{
          document.getElementById('cronometro').innerHTML = tempo;
     }
    
     
},1000);

//logica para posiçoes randomicas

function posicaoRandomica(){

     //remover mosquito anterior (caso exista)

     if(document.getElementById('mosquito')){
          document.getElementById('mosquito').remove();

          //console.log('Elemento selecionado foi: v'+ vidas)
          if(vidas > 3){
             window.location.href = 'gameOver.html';
          }else{
               document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

               vidas++;
          }
          
          }          

      

     var posicaoX = Math.floor(Math.random() * largura) - 90;
     var posicaoY = Math.floor(Math.random()* altura) - 90;

     posicaoX = posicaoX < 0 ? 0 : posicaoX;
     posicaoY = posicaoY < 0 ? 0 : posicaoY;
     console.log(posicaoX, posicaoY);

     //criar o elemento html

     var mosca = document.createElement('img');
     mosca.src = 'imagens/mosca.png';
     mosca.className = tamanhoAleatorio() + ' ' + criandoLadoAleatorio();
     mosca.style.left = posicaoX + 'px';
     mosca.style.top = posicaoY + 'px';
     mosca.style.position = 'absolute';
     mosca.id = 'mosquito'
     mosca.onclick = function(){
          this.remove()
     }

     document.body.appendChild(mosca);
     
}

//criar tamanhos aleatorios

function tamanhoAleatorio(){
     var classe = Math.floor(Math.random() * 3);     

     switch(classe){
          case 0:
               return 'mosquito1';
          case 1:
               return 'mosquito2';
          case 2:
               return 'mosquito3';
     }
}
//criando lado aleatroio

function criandoLadoAleatorio(){

     var classe = Math.floor(Math.random() * 2);     

     switch(classe){
          case 0:
               return 'ladoA';
          case 1:
               return 'ladoB';
          
     }



}
