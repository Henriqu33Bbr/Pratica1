const MudarPg2Ant = document.querySelectorAll('.segunda-pagina .passar-voltar ion-icon')[0]
const MudarPg2Prox = document.querySelectorAll('.segunda-pagina .passar-voltar ion-icon')[1]
const BtnColuna1 = document.querySelectorAll('.segunda-pagina .buttons .buttons-versions-diff .coluna1 button')
const BtnColuna2 = document.querySelectorAll('.segunda-pagina .buttons .buttons-versions-diff .coluna2 button')
const BtnVoltarNormal = document.querySelector('.segunda-pagina .buttons > button')
let Opcoes = ['', '', '']

MudarPg2Ant.addEventListener('click', () => {
    Opcoes = ['', '', '']
    ImgFundo.style.width = '150px'
    Pg2.style.display = 'none' 
})

MudarPg2Prox.addEventListener('click', () => {
    Opcoes = ['', '', '']
    ImgFundo.style.width = '150px'
    Pg3.style.display = 'flex'
})

function Versao(Ver){

    let IdPoke = String((LocalNomeId[1].innerHTML.substring(1)))
    if (Ver === 'animated'){
        ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${Opcoes[1]}${Opcoes[0]}${IdPoke}.gif`)
        return false
    } else {
        return true
    }
}

BtnColuna1[0].addEventListener('click', () => {

    let IdPoke = String((LocalNomeId[1].innerHTML.substring(1)))

    if (Opcoes[0] === ''){
        Opcoes[0] = 'shiny/'
    } else {
        Opcoes[0] = ''
    }

    if (Versao(Opcoes[2]) === true){
        ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opcoes[1]}${Opcoes[0]}${IdPoke}.png`)
    } else {
        Versao(Opcoes[2])
    }
})

BtnColuna1[1].addEventListener('click', () => {
    let IdPoke = String((LocalNomeId[1].innerHTML.substring(1)))

    if (Opcoes[1] === ''){
        Opcoes[1] = 'back/'
    } else {
        Opcoes[1] = ''
    }

    if (Versao(Opcoes[2]) === true){
        ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opcoes[1]}${Opcoes[0]}${IdPoke}.png`)
    } else {
        Versao(Opcoes[2])
    }
})

BtnColuna2[0].addEventListener('click', () => {
    if(NoAnimation === false){
        let IdPoke = String((LocalNomeId[1].innerHTML.substring(1)))
        if (Opcoes[2] === ''){
            Opcoes[2] = 'animated'
            ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${Opcoes[1]}${Opcoes[0]}${IdPoke}.gif`)
        } else {
            Opcoes[2] = ''
            ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opcoes[1]}${Opcoes[0]}${IdPoke}.png`)
        }
    }
})

BtnVoltarNormal.addEventListener('click', () => {
    let IdPoke = String((LocalNomeId[1].innerHTML.substring(1)))
    Opcoes = ['', '', '']
    ImgFundo.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opcoes[1]}${Opcoes[0]}${IdPoke}.png`)
})