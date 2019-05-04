conversor = () => {
    let real = parseFloat(document.getElementById("dolarInput").value) // pega o valor "real"
    let dolar = parseFloat(document.getElementById("dolar").value) // pega o valor "dolar"
    let euro = parseFloat(document.getElementById("euro").value) // pega o valor "euro"
    let libra = parseFloat(document.getElementById("libra").value) // pega o valor "libra"

    var converterDolar = real * dolar // variável de conversão de Dólar em Real
    var converterEuro = real * euro // variável de conversão de Euro em Real
    var converterLibra = real * libra // variável de conversão de Libra em Real

    if(document.getElementById("dolar").selected){ // se a caixa de seleção estiver selecionando Dólar, converter Dólar em Real
        document.getElementById("realInput").value = "R$" + converterDolar
        if(real == 1){
            console.log("US$" + real + " Dólar")
        }else{
            console.log("US$" + real + " Dólares")
        }
    }else if(document.getElementById("euro").selected){ // se a caixa de seleção não estiver selecionanda Dólar mas estiver selecionando Euro, converter Euro para Real
        document.getElementById("realInput").value = "R$" + converterEuro
        if(real == 1){
            console.log("€" + real + " Euro")
        }else{
            console.log("€" + real + " Euros")
        }
    }else{ // se a caixa de seleção não estiver selecionada em nenhuma das opções anteriores, converter Libra para Real
        document.getElementById("realInput").value = "R$" + converterLibra
        if(real == 1){
            console.log("£" + real + " Libra")
        }else{
            console.log("£" + real + " Libras")
        }
    }
    if(document.getElementById("dolar").selected){
        document.getElementById("tituloDolar").innerHTML = "US$";
    }else if(document.getElementById("euro").selected){
        document.getElementById("tituloDolar").innerHTML = "€";
    }else{
        document.getElementById("tituloDolar").innerHTML = "£";
    }
}
// Created By Pablo Lopes | Coments by Carlos Balland