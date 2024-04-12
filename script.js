let chave = "d23fa05a659b7b7c0b04ceb9658c765a"

function CliqueiNoBotão() {
    let cidade = document.querySelector(".input-city").value

    BuscarCidade()
}

async function BuscarCidade() {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=londres&appid=d23fa05a659b7b7c0b04ceb9658c765a").then(resposta => resposta.json())
    // await = espere
    // fetch --> ferramenta do javascript para acessar servidores
    // then --> então
    //json --> javascript object notation (o formato que o javascript entende)
    console.log(dados)
}

