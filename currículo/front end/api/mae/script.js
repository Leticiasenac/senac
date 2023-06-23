var frase = "A obra prima de Deus é o coração de Mãe"


function gerarFrase(){
    var texto = document.getElementById("frase")
    texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}