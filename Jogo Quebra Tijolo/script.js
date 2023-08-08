
//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete 
var raqueteAltura = 10;
var raqueteLargura = 70;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 7;

//configurar a bola
var bolaRadius = 10;

var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                   //direção de bola em X (esquerda/direita)
var bolaDY = -2;                  //direção de bola em y  (acima / abaixo)

var tijolosPorLinha = 3;
var tijolosPorColuna = 6;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

 function facil(){
    raqueteLargura = 90;
    tijolosPorLinha = 4;
    tijolosPorColuna = 5;
    tijoloLargura = 90;
    tijoloAltura = 40;
    bolaRadius = 20;  //tamanho da bola 
    bolaDX = 2;       //velocidade da bola direita/esquerda
    bolaDY = -1;      //velocidade da bola acima/abaixo
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();
}  

  function medio(){
    raqueteLargura = 70;
    tijolosPorLinha = 3;
    tijolosPorColuna = 4;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaRadius = 20;  
    bolaDX = 2;       
    bolaDY = -2;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();
}
function dificil(){
    raqueteLargura = 80;
    tijolosPorLinha = 10;
    tijolosPorColuna = 7;
    tijoloLargura = 70;
    tijoloAltura = 40;
    bolaRadius = 20;  
    bolaDX = 3;       
    bolaDY = -2;  
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();
}
function impossivel(){
    raqueteLargura = 50;
    tijolosPorLinha = 3;
    tijolosPorColuna = 4;
    tijoloLargura = 60;
    tijoloAltura = 40;
    bolaRadius = 20;  
    bolaDX = 4;       
    bolaDY = -1;  
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();
}

 function iniciarTijolos(){
    //dedicado apena a inicialização dos tijolos
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        tijolos[coluna] = []  //0 1 2 3 4 5
    
        for (var linha = 0; linha < tijolosPorLinha; linha++) {
    
            tijolos[coluna][linha] = { x: 5, y: 5, ativo: 1 }
            //x é a posição esquerda/direita no canva
            //y é a posição acima/abaixo no canva
            //ativo, determina se o tijolo aparece ou não, 1 ou 0
        }
    }    
 }

 iniciarTijolos();
var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete - detecta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true; //ativa variavel setaEsquerda
    }
}

function subirDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false; //ativa variavel setaEsquerda
    }
}


function desenharRaquete() {
    desenho.beginPath();       //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
}

function desenharBola() {
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}


function desenharTijolos() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            if (tijolos[coluna][linha].ativo == 1) { //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento) + espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento) + espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;
                
                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "green";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}


function detectarColisao() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            var tijolo = tijolos[coluna][linha];
             if(tijolo.ativo === 1){
 
                if(bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius> tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                        
                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao + 10;
                        tela.innerHTML = "Score: "+ pontuacao;
                        gerarEfeitoSonoro('moeda.mp3');

                        
          
                        if(pontuacao === totalPontuacao){
                            vitoria();
                        }
                 }
            }
        }
    }
}

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
}

function reiniciar(){
    document.location.reload();
}

   //exibir na tela mensagem vitória
  function vitoria (){
    var mensagem = document.getElementById("vitoria");  
    mensagem.style.display = "block";
}

  function gerarEfeitoSonoro(som){
    // cria contexto de  áudio
      var contexto = new (window.AudioContext)();
    // fazer uma requisição para carregar arquivo de som
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = "arraybuffer";  // armazenar na memoria 

    requisicao.onload = function (){
        // decoficar o arquivo de som
        contexto.decodeAudioData(requisicao.response, function ( buffer) {
            // reprodução do som no navegador
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            // conectar a saida de som
            fonte.connect(contexto.destination);
            fonte.start(0); 

       });

  }
  requisicao.send(); 
  
   }

function desenhar() {
   
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();
     
    //analisar colisao eixo X, colisao canto direita/esquerdo
    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {


        bolaDX = - bolaDX; //inverte direcao direita/esquerda
        gerarEfeitoSonoro('bordas.mp3');
    }
    //analisa colisao com parte de cima
    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY; //inverte colisao ao bater em cima

    } else if (bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura) {

        //se for maior que o começo da raquete e menor que o final da raquete
        if (bolaX > raqueteX && bolaX < raqueteX + raqueteLargura) {
            bolaDY = -bolaDY;           //inverte direção
        } else {
            // document.location.reload(); //reinicia
            gameover();
        }
    }

    
    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;    //anda para direita

        //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    } else if (setaEsquerda === true && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete;    //anda para esquerda
    }
    bolaX = bolaX + bolaDX; // faz bola andar para direita/esquerda
    bolaY = bolaY + bolaDY; // faz a bola andar para cima/baixo

    requestAnimationFrame(desenhar); //atualizar tela de forma suave
}

desenhar(); //chama função desenhar
