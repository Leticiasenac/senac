// SEM ORIENTAÇÃO A OBJETOS
var nome1 = 'Paula';
var nome2 = 'Juliana';
var nome3 = 'Alana';

var idade1 = 25;
var idsade2 = 30;
var idade3 = 40;

function falar (nome, idade){
    alert ('Sem Orientação a Objetos: Olá sou +'+ nome +' e tenho ' + idade + 'anos');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);


//COM ORIENTAÇÃO A OBJETOS 
// Classe 
class Pessoa {
    constructor(nome,idade){
        this.nome = nome; 
        this.idade = idade;
}       
falar(){
    alert("Pessoa criada:Olá meu nome é"+this.nome+" e tenho"+this.idade + "anos");
  }
}

var pessoa1 = new Pessoa('Astolfo', 71);
var pessoa2 = new Pessoa('Malvina', 50);
var pessoa3 = new Pessoa('Muriel',60);







 alert(Olá + pessoa3.nome);

 //HERANÇA E POLIMORFISMO
 // criando classe 
class Animal {
    constructor(nome){
        this.nome = nome;
   }
   fazerBarulho (){
    alert("Fazendo barulho genérico");
   }
}

  //criando classes filhas de animal

class Cachorro extends Animal {

    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
     fazerBarulho(){
        alert ("Cachorro Latindo!")
     }
}
class Gato extends Animal {
    constructor(nome, cor){
        super(nome);
        this.cor = cor
    }
fazerBarulho(){
    alert("Gato Miando!");
   }
}

var objetoCachorro = new Cachorro('Fred','Schanauzer');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();  //latindo

var objetoGato = new Gato('Sininho','cinza');
alert(objetoGato.nome);
alert(objetoGato.raca);
objetoGato.fazerBarulho();  //miando

 //Encapsulamento. modificador de acesso
class contaBancaria {
     constructor(saldo){
        this._saldo = saldo; // "_" significa privado
     }

    }
    get saldo(){
       return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo  + valor;
    }
    sacar(){
        if(valor <= this._saldo){
            this._saldo = saldo - valor;
    }else {
        alert("Valor maior que o saldo!")
    }
      
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
alert(minhaConta.depositar)(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);


