//logica para verificar tamanho da tela

var altura = 0
var largura = 0

function ajustaTamanhoTelaJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(altura, largura)
}

ajustaTamanhoTelaJogo()

//logica para posiçoes randomicas

var posicaoX = Math.floor(Math.random() * largura) - 100;
var posicaoY = Math.floor(Math.random()* altura) - 100;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;
console.log(posicaoX, posicaoY);

//criar o elemento html

var mosca = document.createElement('img');
mosca.src = 'imagens/mosca.png';
mosca.className = 'mosquito1'
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'

document.body.appendChild(mosca);