//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d")

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centarlizar raquete 
var velocidadeRaquete = 7;

//configurar a bola 
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.heigth - 30;
var bolaDX = 2;        //direção de bola em X (esquerda/direita)
var bolaDY = -2;      // direção de boal em y (aciam/abaixo)

var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete - detecta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {

  // se o valor = "direita" || ou valor = "setaDireita"
  if (tecla.key === "Right" || tecla.key === "ArrowRight") {
    setaDireita = true;  //Ativa variavel setaDireita

    // Se o valor = "esquerda" || ou valor = "setaEsquerda"
  } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
    setaEsquerda = true; //Ativa variavel setaEsquerda

  }
}
function subirDaTecla() {

}

function desenharRaquete(){
  desenho.beginPath();
  desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura)
  desenho.fillStyle = "blue";
  desenho.fill();
  desenho.closePath();
  
  
}









function desenhar() {
  desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o fgrame

  desenharRaquete();

  if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
    raqueteX = raqueteX + velocidadeRaquete;
  }
  requestAnimationFrame(desenhar) // atualizar tela de forma suave


}







desenhar(); // chama função desenhar



