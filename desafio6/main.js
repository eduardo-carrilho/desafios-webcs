const section = document.getElementById('area_sorteio');
const url = "https://rickandmortyapi.com/api/character"

let variavelFora
const id = fetch(url)
    .then(response => response.json()
    .then(data => {variavelFora = data.info.count
 }))

let personagensSorteados = []

function geraIdAleatorio(url) {
    personagensSorteados = []
    section.innerHTML = ""
    for(let i = 0; i<3; i++){
        let idPersonagem = Math.floor(Math.random() * variavelFora - 1) + 1;
        getCharacter(idPersonagem, url)
    }
}

function getCharacter(idPersonagem, url){
    url = url+`/${idPersonagem}`
    fetch(url)
    .then(response=>response.json())
    .then(dados=> listarPersonagem(dados)) 
}

function listarPersonagem(personagem,id){
    let classe = ""
    if(personagem.status == "unknown"){
        classe = "desconhecido"
    }else if(personagem.status == "Dead"){
        classe = "morto"
    }else if(personagem.status == "Alive"){
        classe = "vivo"
    }
    personagensSorteados.push([personagem.name,personagem.url, personagem.image])
    const template = `<div class="main__sorteado">
                <img src="${personagem.image}" alt="">
                <div class="main__sorteado__informacoes">
                    <ul class="main__sorteado__informacoes__lista">
                        <li class="main__sorteado__informacoes__lista__dados">Nome: ${personagem.name}</li>
                        <li class="main__sorteado__informacoes__lista__dados">Especie: ${personagem.species}</li>
                        <li class="main__sorteado__informacoes__lista__dados">Genero: ${personagem.gender}</li>
                        <li class="main__sorteado__informacoes__lista__dados">Status: <span class="${classe}">${personagem.status}</span></li>
                        <li class="main__sorteado__informacoes__lista__dados">Origem: ${personagem.origin.name}</li>
                        <li class="main__sorteado__informacoes__lista__dados">Localização: ${personagem.location.name}</li>
                    </ul>
                </div>
                <div class="main__sorteado__actions">
                    <button id="${personagensSorteados.length-1}" onclick="adicionar(this)" class="main__sorteado__actions__selecionar">Selecionar</button>
                    <button class="main__sorteado__actions__mais"><a class="main__sorteado__actions__mais__link" href="${personagem.url}" target="_blank">Saber mais</a></button>
                    </div>
            </div>`
        section.innerHTML += template
}


let slotsVazios = [0,1,2,3,4,5]

function adicionar(elemento){
    if(slotsVazios.length>0){
        const numeroEquipe = document.getElementById("numero_equipe");
        numeroEquipe.innerHTML = Number(numeroEquipe.innerHTML)+1
        const espaco = document.getElementById(`slot-${slotsVazios[0]}`)
        espaco.setAttribute("class", "main__equipe__posicao")
        
        const template = ` 
        <img src="${personagensSorteados[elemento.id][2]}" alt="">
        <div class="main__equipe__posicao__informacoes">
        <h3>${personagensSorteados[elemento.id][0]}</h3>
        <button class="btn informacoes"><a class="main__equipe__posicao__informacoes__link" href="${personagensSorteados[elemento.id][1]}" target="_blank">Informações</a></button>
        <button onclick="remover(this)" class="btn remover">Remover</button>
        </div>`
        
        espaco.innerHTML = template
        slotsVazios.shift()
        geraIdAleatorio(url)
    }else{
        alert('Sua equipe está cheia, remova alguém para adicionar esse personagem.')
    }
}

function remover(elemento){
    const espaco = document.getElementById(elemento.parentElement.parentElement.id)
    let teste = document.getElementById(elemento.parentElement.parentElement.id).id.split("-")[1]
    
    espaco.setAttribute("class", "main__equipe__vazia")
    const template = `<h2>Espaço Vazio</h2>`
    espaco.innerHTML = template

    const numeroEquipe = document.getElementById("numero_equipe");
    numeroEquipe.innerHTML = Number(numeroEquipe.innerHTML)-1
    slotsVazios.push(teste)
    slotsVazios.sort()

}
