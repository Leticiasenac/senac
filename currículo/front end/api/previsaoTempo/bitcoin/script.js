
function buscar(){
     var seletor = document.getElementById('moeda').value;
     var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl') 
    .then(response => response.json())
    .then(data => {


     var preco = data[seletor].brl;
     resultado.textContent = formatar(preco);
     mudarImagem(seletor);

}).catch(error => resultado.textContent = error);

}




function formatar(valor){
    //máscara para formatar valor
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$"+valor;
    return valor
}
    
function mudarImagem(seletor){
    var moeda =document.getElementById('imagem');
    
    if(seletor == "bitcoin"){
        moeda.innerHTML = '<img width="200" src= "https://s2.glbimg.com/G38OxitjXw3iVDq8pCeu4daAfRU=/0x0:6048x4024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2023/O/F/hSKuTHSsuBfZqWVL5h8A/bitcoin-ouro-unsplash.jpg" >'
    
    }else if (seletor == "ethereum"){
        moeda.innerHTML = '<img width="200" src= "https://thumbs.dreamstime.com/z/ethereum-moeda-d-f%C3%ADsica-isom%C3%A9trica-de-digitas-cryptocurrency-dourada-com-s%C3%ADmbolo-do-isolada-no-backgro-branco-111949324.jpg">'
    }else if (seletor == "litecoin"){
        moeda.innerHTML = '<img width="200" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7_Vzw0dxjnr8Js802-nmuMRNeCjfCc_4ZA&usqp=CAU">'
    }else if (seletor == "dogecoin"){
        moeda.innerHTML =  '<img width="200" src= "https://www.infomoney.com.br/wp-content/uploads/2019/06/dogecoin.jpg?fit=561%2C380&quality=50&strip=all">'
    }
}