const MudarPg3Ant = document.querySelectorAll('.terceira-pagina .passar-voltar ion-icon')[0]
const MudarPg3Prox = document.querySelectorAll('.terceira-pagina .passar-voltar ion-icon')[1]
const Pg3 = document.querySelector('.terceira-pagina')
const LocalAllTipos = document.querySelectorAll('.terceira-pagina .container .fraquezas .types > div')
const LocalFraqVant = document.querySelector('.terceira-pagina .container .fraquezas .fraquezas-types .elementos')
const BtnFraqueza = document.querySelectorAll('.terceira-pagina .container .fraquezas .fraquezas-types .buttons button')[0]
const BtnVantagem = document.querySelectorAll('.terceira-pagina .container .fraquezas .fraquezas-types .buttons button')[1]
const LocalNatures = document.querySelector('.terceira-pagina .container .fraquezas .natures')
const LocalAllNatures = document.querySelectorAll('.terceira-pagina .container .fraquezas .natures .options-natures p')
const LocalAtributos = document.querySelectorAll('.terceira-pagina .container .fraquezas .natures .atributos p')
let AllAtributos = []

for(let i = 0; i < LocalAtributos.length; i++){
    AllAtributos.push(LocalAtributos[i].innerHTML)
}

const Elementos = ['fire', 'water', 'ground', 'ice', 'rock', 'dark', 'fairy', 'psychic', 'bug', 'steel', 'electric', 'grass', 'flying', 'dragon', 'fighting', 'normal', 'poison', 'ghost']
let Tipo1 = ''
let Tipo2 = ''

const fireVantagem     = [ 'fire'     , ['steel', 'ice', 'bug', 'grass']]
const SteelVantagem    = [ 'steel'    , ['fairy', 'ice', 'rock']]
const waterVantagem    = [ 'water'    , ['fire', 'ground', 'rock']]
const dragonVantagem   = [ 'dragon'   , ['dragon']]
const electricVantagem = [ 'electric' , ['water', 'flying']]
const fairyVantagem    = [ 'fairy'    , ['dragon', 'dark', 'fighting']]
const GhostVantagem    = [ 'ghost'    , ['ghost', 'psychic']]
const iceVantagem      = [ 'ice'      , ['dragon', 'grass', 'ground', 'flying']]
const Bugvantagem      = [ 'bug'      , ['grass', 'psychic', 'dark']]
const fightingVantagem = [ 'fighting' , ['steel', 'ice', 'normal', 'rock', 'dark']]
const NormalVantagem   = [ 'normal'   , []]
const RockVantagem     = [ 'rock'     , ['fire', 'ice', 'bug', 'flying']]
const grassVantagem    = [ 'grass'    , ['water', 'rock', 'ground']]
const psychicVantagem  = [ 'psychic'  , ['fighting', 'poison']]
const Darkvantagem     = [ 'dark'     , ['ghost', 'psychic']]
const GroundVantagem   = [ 'ground'   , ['steel', 'electric', 'fire', 'rock', 'poison']]
const PoisonVantagem   = [ 'poison'   , ['fairy', 'grass']]
const flyingVantagem   = [ 'flying'   , ['bug', 'fighting', 'grass']]

const ListaElementos = [fireVantagem, SteelVantagem, waterVantagem, dragonVantagem, electricVantagem, fairyVantagem, GhostVantagem, iceVantagem, Bugvantagem, fightingVantagem, NormalVantagem, RockVantagem, grassVantagem, psychicVantagem, Darkvantagem, GroundVantagem, PoisonVantagem, flyingVantagem]


const Naturezas = ['Adamant','Lonely','Naughty','brave','Timid','Jolly','Hasty','Naive','Bold','Impish','Relaxed','Lax','Calm','Gentle','Careful','Sassy','Mild','Rash','Quiet','Modest'] 

const Adamant = ['Adamant', ['atack', 'special atack']]
const Lonely  = ['Lonely' , ['atack', 'defense' ]]
const Naughty = ['Naughty', ['atack', 'special defense']]
const brave   = ['Brave'  , ['atack', 'speed']]
const Timid   = ['Timid'  , ['speed', 'atack']]
const Jolly   = ['Jolly'  , ['speed', 'special atack']]
const Hasty   = ['Hasty'  , ['speed', 'defense' ]]
const Naive   = ['Naive'  , ['speed', 'special defense']]
const Bold    = ['Bold'   , ['defense', 'atack']]
const Impish  = ['Impish' , ['defense', 'special atack']]
const Relaxed = ['Relaxed', ['defense', 'speed']]
const Lax     = ['Lax'    , ['defense', 'special defense']]
const Calm    = ['Calm'   , ['special defense', 'atack']]
const Gentle  = ['Gentle' , ['special defense', 'defense' ]]
const Careful = ['Careful', ['special defense', 'special atack']]
const Sassy   = ['Sassy'  , ['special defense', 'speed']]
const Mild    = ['Mild'   , ['special atack', 'defense' ]]
const Rash    = ['Rash'   , ['special atack', 'special defense']]
const Quiet   = ['Quiet'  , ['special atack', 'speed']]
const Modest  = ['Modest', ['special atack', 'atack']]

const ListaNaturezas = [Adamant, Lonely, Naughty, brave, Timid, Jolly, Hasty, Naive, Bold, Impish, Relaxed, Lax, Calm, Gentle, Careful, Sassy, Mild, Rash, Quiet, Modest]

MudarPg3Ant.addEventListener('click', () => {
    ImgFundo.style.width = '150px'
    Pg3.style.display = 'none' 
})



let TiposSelecionado = []

BtnFraqueza.addEventListener('click', () => {
    MostrarFraqueza(Tipo1, Tipo2)
})

BtnVantagem.addEventListener('click', () => {
    if(Tipo1 !== Tipo2 && Tipo2 !== undefined){
        alert('Não existe ataque com 2 elementos')
    } else {
        Mostrarvantagem(Tipo1)
    }
})

for(let i = 0; i < LocalAllTipos.length; i++) {
    LocalAllTipos[i].addEventListener('click', () => {
        if(TiposSelecionado.length < 2){
            TiposSelecionado.push(i)
        } else {
            LocalAllTipos[TiposSelecionado[0]].classList.remove('focado')
            TiposSelecionado.shift()
            TiposSelecionado.push(i)
        }

        Tipo1 = Elementos[TiposSelecionado[0]]
        Tipo2 = Elementos[TiposSelecionado[1]]

        for (let k = 0; k < TiposSelecionado.length; k++){
            LocalAllTipos[TiposSelecionado[k]].classList.add('focado')
        }
    })
}

function MostrarFraqueza(Tipo1, Tipo2){
    let Conteudo = ''
    let VantagemTipo1 = []
    let VantagemTipo2 = []
    function VerVantagemTipo1(Elemento, Tipo1){
        if (Elemento[0] === Tipo1){
            VantagemTipo1 = Elemento[1]
        }
    }

    function VerVantagemTipo2(Elemento, Tipo2){
        if (Elemento[0] === Tipo2){
            VantagemTipo2 = Elemento[1]
        }
    }
    function IncluirDesvantagem(Elemento, Tipo1, Tipo2, VantagemTipo1, VantagemTipo2){
        let Fraqueza = 0
        if (Tipo1 === Tipo2){
            if (Elemento[1].includes(Tipo1) === true){
                Fraqueza += 2
            }
        } else {
            if (Elemento[1].includes(Tipo1) === true){
                Fraqueza += 2
            }
            if (Elemento[1].includes(Tipo2) === true){
                Fraqueza += 2
            }
        }

        if (Tipo1 === Elemento[0] && ((Tipo1 !== 'dragon') && (Tipo1 !== 'ghost'))){
            Fraqueza -= 2
        } else if (Tipo2 === Elemento[0] && ((Tipo2 !== 'dragon') && (Tipo2 !== 'ghost'))){
            Fraqueza -= 2
        }

        if ((((Elemento[0] === 'dragon') || (Elemento[0]  === 'ghost')  ) && (Elemento[0] === Tipo1))){
            Fraqueza += 2
        } else if (((((Elemento[0] === 'dragon') || (Elemento[0]  === 'ghost')  ) && (Elemento[0] === Tipo2)))){
            Fraqueza += 2
        }
        
        if (VantagemTipo1.includes(Elemento[0]) || VantagemTipo2.includes(Elemento[0])){
            Fraqueza -= 2
        }

        if (Fraqueza > 0){
            Conteudo += `
            <div>
                <p>${Fraqueza}X de ${Elemento[0]}</p>
                <img src="assets/icons-elements/${Elemento[0]}.svg" alt="Elemento ${Elemento[0]}">
            </div>
            `
        }
        if(Elemento[0] === 'flying'){
            LocalFraqVant.innerHTML = Conteudo
        }
    }

    ListaElementos.forEach(Elemento => 
        VerVantagemTipo1(Elemento, Tipo1)
        )

    ListaElementos.forEach(Elemento =>
        VerVantagemTipo2(Elemento, Tipo2)
        )

    ListaElementos.forEach(Elemento =>
        IncluirDesvantagem(Elemento, Tipo1, Tipo2, VantagemTipo1, VantagemTipo2)
    )
}

function Mostrarvantagem(Tipo){
    let Conteudo = ''
    function IncluirVantagem(Elemento, Tipo){
        if(Elemento[0] === Tipo){
            Elemento[1].forEach(Vantagem => 
                Conteudo += `
                <div>
                    <p>Da 2X em ${Vantagem}</p>
                    <img src="assets/icons-elements/${Vantagem}.svg" alt="Elemento ${Vantagem}">
                </div>
                `
                )
            LocalFraqVant.innerHTML = Conteudo
        }
    }
    ListaElementos.forEach(Elemento => 
        IncluirVantagem(Elemento, Tipo)
        )
}

for(let i = 0; i < LocalAllNatures.length; i++){
    LocalAllNatures[i].addEventListener('click', (e) => {
        let NomeNatureza = e.target.innerHTML
        let LocalBuff = 0
        let LocalNerf = 0

        LocalAtributos.forEach(Atributos => 
            Atributos.classList.remove('aumenta')
            )

        LocalAtributos.forEach(Atributos => 
            Atributos.classList.remove('diminui')
            )

        function MostrarStatusNatureza(Natureza){
            if (Natureza[0] === NomeNatureza){
                 LocalBuff = AllAtributos.indexOf(Natureza[1][0])
                 LocalNerf = AllAtributos.indexOf(Natureza[1][1])

                 LocalAtributos[LocalBuff].classList.add('aumenta')
                 LocalAtributos[LocalNerf].classList.add('diminui')
             }
        }

        ListaNaturezas.forEach(Natureza => 
                 MostrarStatusNatureza(Natureza)
            )
    })
}