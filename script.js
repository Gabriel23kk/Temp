let chave = "d23fa05a659b7b7c0b04ceb9658c765a"

function CliqueiNoBotão() {
    let cidade = document.querySelector(".input-city").value
    console.log(cidade)

    BuscarCidade(cidade)
}
function ColocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".Cidade").innerHTML = "Tempo em "+dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".Umidade").innerHTML = "Umidade "+dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".Texto-previsão").innerHTML = dados.weather[0].main
}

async function BuscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=d23fa05a659b7b7c0b04ceb9658c765a&units=metric").then(resposta => resposta.json())
    // await = espere
    // fetch --> ferramenta do javascript para acessar servidores
    // then --> então
    //json --> javascript object notation (o formato que o javascript entende)

    /*
    Math.floor --> Uma ferramenta do JavaScript que serve para arredondar valores 
    */
    
    ColocarNaTela(dados)
}

