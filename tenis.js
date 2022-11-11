// uso este simbolo quando quero escrever algo sem que altere o script##

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

// variaveis bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raquetecomprimento = 10;
let raquetealtura = 90;

// variaveis para tamanho da raquete
let xraquete = 5; 
let yraquete = 150;

// variaveis raquete oponente####
let xraqueteoponente = 590;
let yraqueteoponente = 150
let velocidadeyoponente;

let colidiu = false;

//criando placar
let meuspontos = 0;
let pontosoponente = 0;

//####usado para o tamanho do qrando
function setup() {
  createCanvas(600 , 400);  
}

//####background=usado para cor do quadro. draw=desenhar e tambem é como um //sumario onde vou colocando todas as funcoes existentes no jogo.

function draw() {
  background(0);  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarraquete(xraquete,yraquete);
  movimentominharaquete();
  verificacaocolisaoraquete()  
  colisaoraquete(xraquete,yraquete);
  mostrarraquete(xraqueteoponente,yraqueteoponente);
  movimentooponente();
  colisaoraquete(xraqueteoponente,yraqueteoponente);
  incluirplacar();
  marcaponto();

}

// usando codigo para mostrar a bolinha.
function mostraBolinha()
{
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha()
{
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda()
{
  // no java usamos || no lugar da palavras OU, e estamos nesta funcao //verificando a colisao da bolinha nas bordas.
  
  if (xBolinha + raio> width || 
    xBolinha - raio< 0) { // usamos para definir onde a bolinha esta tocando
    velocidadexBolinha *= -1;// podemos calcular por menos 1 para mdar a direcao
  }
  if (yBolinha + raio> height || 
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostrarraquete(x,y){
    rect(x, y, raquetecomprimento, raquetealtura) 
}


function movimentominharaquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}

function verificacaocolisaoraquete(){
  if (xBolinha - raio < xraquete + raquetecomprimento && yBolinha - raio < yraquete + raquetealtura && yBolinha + raio > yraquete)// neste caso verificamos se a bolinha toca a borda se a raquete esta e cima e na parte de baixo. e tambem se toca a raquete quando esta centralizada.
    
  {
  velocidadexBolinha *= -1; 
  }
}

//agora vou criar uma nova funcao, pois estou usando uma solucao encontrado no gitub para verificar se a requete esta de acordo com o que quero no jogo. mas para isso preciso referenciar o arquivo de onde stou usando minha solução, para isso vou em index.html e referencio. como ja esta feito. """sempre lembrar disso"""

function colisaoraquete(x,y){
  colidiu = 
  collideRectCircle(x,y,raquetecomprimento,raquetealtura, xBolinha, yBolinha, raio);
  if (colidiu){
   velocidadexBolinha *= -1;
  }
}

function movimentooponente(){
  velocidadeyoponente = yBolinha - yraqueteoponente - raquetecomprimento /2 - 30;
  yraqueteoponente += velocidadeyoponente
}

// agora vamos criar o placar para a pontuacao dos jogadores.
function incluirplacar(){
  stroke(255);
  textAlign(CENTER) //deixando centralizado o placar
  textSize(16) // alterar tamanho do placar
  fill(color(255, 140, 0))
  rect(150,10, 40, 20)// posicao:150, altura:10, largura:40, compri:20 
  fill(255)
  text(meuspontos,170,26)
  fill(color(255, 140, 0))
  rect(450,10,40,20)
  fill(255)
  text(pontosoponente,470,26)
  //no p5 usamos "text" para incluir textos, o que queremos exibir
}

function marcaponto(){
  if(xBolinha > 590){
    meusponto += 1;
  }
if(xBolinha < 10){
  pontosoponente += 1;
}
}
