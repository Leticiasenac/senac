 
 
 class Livro {
    //classe livro, 
    constructor(titulo, autor){
       tjis.titulo = titulo;
       this.autor = autor;
    }  
class gerenciamento {
    constructor(){
        // classe gerenciamento, responsável por gerenciar os elementos da tela
        class gerenciamento {
            constructor(){
                this.livros = []; // lista de livros
                this.formulario = document.getElementById('formulario');
                this.listagem = document.getElementById('listagem');

                // monitorar o submit(click do botão) do formulário - chama funcao adicionar
                this.formulario.addEventListener('submit', this.adicionar.bind(this));
            }
adicionar(event){
    event.preventDefault();
    var titulo = document.getElementById('titulo').ariaValueMax; //pega valor titulo
    var autor = document.getElementById('autor').value //pega valor autor

    var livro = new Livro(titulo,autor); //criando objeto livro
    this.livros.push(livro); //adiciona objeto livro na lista de livros;
    this.exibirTela();
    titulo.value = ''; //limpar campo titulo
    autor.value = ''; //limpa campo autor
   }
exibirTela(){
    this.listagem.innerHTML = ''; //limpa lista 
    for(var i=0 i < this.livros.length; i++) { // percorrer toda lista de livros
        var livro = this.books[i];
        var li = document.createElement('li');
        li.textContent = livro.titulo +'por'+ livro.autor;
        this.listagem.appendChild(li);
        }
    }
}
var gerencia = new gerenciamento(); //instanciamento um novo objeto gerenciamento
