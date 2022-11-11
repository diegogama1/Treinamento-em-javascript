//codigo do carro
// estamos criando uma lista onde colocamos informacoes e conseguimos acessar quando queremos.
let xCarros = [600, 600, 600, 600, 600, 600]

let yCarros = [40, 96, 150, 210, 270, 318]// se quisermos tirar os vetores dos carros ycarro, podemos pois irar funcionar normalmente( eu irei deixar para saber onde esta).
let velocidadeCarros = [2.5, 3, 4, 4.5, 5, 3,5] // mesma coisa, so que agora èe a velocidade dos carros.
let comprimentoCarro = 50;
let alturaCarro = 40;


function  mostraCarro(){
 for (let i = 0; i < imagemCarros.length; i = i + 1){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
 } 
}
//para otimizar o jogo, temos um maneira diferente de escrever "i=i+1", "i++"
// velocidade do carro
function movimentaCarro(){
  for(let i =0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }  // com esta funcao estou fazendo o carro movimentar, tendo que o carro parte de 420 para 0.
}

// agora vamos coloca que o carro sempre volte ao ponto inicial

function voltaPosicaoInicialCarro(){
  for(let i =0; i < imagemCarros.length; i = i + 1){
  if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
 }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}