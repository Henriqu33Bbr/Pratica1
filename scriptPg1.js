const BtnEnviar = document.querySelector('header .pesquisa .submit')
let LocalAllPoke = document.querySelector('.container .pokemons')
const LocalImg = document.querySelector('.container .pokemons-info div img')
const LogalTipo = document.querySelectorAll('.container .pokemons-info .type .element')
const LocalNomeId = document.querySelectorAll('.container .pokemons-info .poke-desc h2 span')
const LocalHabili = document.querySelector('.container .pokemons-info .poke-desc .ability')
const BtnProx = document.querySelector('footer .ant-prox .prox')
const BtnAnt = document.querySelector('footer .ant-prox .ant')
const FormPesquisa = document.querySelector('header .pesquisa')
const MudarPg = document.querySelector('main .passar-voltar ion-icon')
const Pg2 = document.querySelector('.segunda-pagina')
const ImgFundo = document.querySelector('.segunda-pagina .container .img-fundo img')
var NoAnimation = false

MudarPg.addEventListener('click', () => {
    Pg2.style.display = 'flex'
    ImgFundo.setAttribute('src', LocalImg.getAttribute('src'))
    if(Number((LocalNomeId[1].innerHTML.substring(1))) >= 650){
        BtnColuna2[0].classList.add('no-click')
        NoAnimation = true
    } else {
        BtnColuna2[0].classList.remove('no-click')
        NoAnimation = false
    }
})

const AxiosPokemonImutavel = async (Number) => {
    const data = (await axios.get(`https://pokeapi.co/api/v2/pokemon${Number}`)).data
    return data
}

const AxiosPokemon = async (Pokemon) => {
    if(Pokemon === "/0"){
        Pokemon = "/905"
    } else if (Pokemon === "/906"){
        Pokemon = "/1"
    }

    const data = (await axios.get(`https://pokeapi.co/api/v2/pokemon${Pokemon}`)).data

    const ImgPoke = data.sprites.front_default
    LocalImg.setAttribute("src", ImgPoke)

    const Nome = data.name
    const Id = data.id
    LocalNomeId[0].textContent = Nome
    LocalNomeId[1].textContent = `#${Id}`


    const Tipo1 = data.types[0].type.name
    const TotalTipos = data.types.length

    if(TotalTipos === 1){
        LogalTipo[0].innerHTML = `<img src="assets/icons-elements/${Tipo1}.svg" alt="sasasa"><p>${Tipo1}</p>`
        LogalTipo[1].style.display = "none"
    } else {
        const Tipo2 = data.types[1].type.name
        LogalTipo[1].style.display = "flex"
        LogalTipo[0].innerHTML = `<img src="assets/icons-elements/${Tipo1}.svg" alt="sasasa"><p>${Tipo1}</p>`
        LogalTipo[1].innerHTML = `<img src="assets/icons-elements/${Tipo2}.svg" alt="sasasa"><p>${Tipo2}</p>`
    }

    const TotalAbili = data.abilities.length

    if(data.abilities[0].ability.name.replaceAll("-","_").includes('_')){
        let ListaAbility = data.abilities[0].ability.name.replaceAll("-","_").split('')
        let IndexUnder = data.abilities[0].ability.name.replaceAll("-","_").indexOf('_') + 1
        ListaAbility[IndexUnder] = ListaAbility[IndexUnder].toUpperCase()
        var Ability1 = ListaAbility.toString().replaceAll(',', '')
    } else {
        var Ability1 = data.abilities[0].ability.name
    }

    if(TotalAbili === 1){
        LocalHabili.innerHTML = `
        <div>
            <h3>${Ability1}</h3>
            <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability1}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
        </div>
        `
    } else if (TotalAbili === 2){
        if(data.abilities[1].ability.name.replaceAll("-","_").includes('_')){
            let ListaAbility = data.abilities[1].ability.name.replaceAll("-","_").split('')
            let IndexUnder = data.abilities[1].ability.name.replaceAll("-","_").indexOf('_') + 1
            ListaAbility[IndexUnder] = ListaAbility[IndexUnder].toUpperCase()
            var Ability2 = ListaAbility.toString().replaceAll(',', '')
        } else {
            var Ability2 = data.abilities[1].ability.name
        }
        LocalHabili.innerHTML = `
        <div>
        <h3>${Ability1}</h3>
        <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability1}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
            </div>
        <div>
            <h3>${Ability2}</h3>
            <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability2}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
        </div>
        `
    } else {
        if(data.abilities[1].ability.name.replaceAll("-","_").includes('_')){
            let ListaAbility = data.abilities[1].ability.name.replaceAll("-","_").split('')
            let IndexUnder = data.abilities[1].ability.name.replaceAll("-","_").indexOf('_') + 1
            ListaAbility[IndexUnder] = ListaAbility[IndexUnder].toUpperCase()
            var Ability2 = ListaAbility.toString().replaceAll(',', '')
        } else {
            var Ability2 = data.abilities[1].ability.name
        }
        if(data.abilities[2].ability.name.replaceAll("-","_").includes('_')){
            let ListaAbility = data.abilities[2].ability.name.replaceAll("-","_").split('')
            let IndexUnder = data.abilities[2].ability.name.replaceAll("-","_").indexOf('_') + 1
            ListaAbility[IndexUnder] = ListaAbility[IndexUnder].toUpperCase()
            var Ability3 = ListaAbility.toString().replaceAll(',', '')
        } else {
            var Ability3 = data.abilities[2].ability.name
        }
        
        LocalHabili.innerHTML = `
        <div>
            <h3>${Ability1}</h3>
            <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability1}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
        </div>
        <div>
        <h3>${Ability2}</h3>
        <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability2}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
        </div>
        <div>
            <h3>${Ability3}</h3>
            <span>Acesse <a href="https://bulbapedia.bulbagarden.net/wiki/${Ability3}_(Ability)" target="_blank">aqui</a> para a descrição da ability</span>
        </div>
        `
    }
    return Id
}

function PesquisarPokemon(){
    const NomePokemon = document.querySelector('.nome-Pokemon').value
    if (Number(NomePokemon) > 905 || Number(NomePokemon) < 0){
                alert(`
        Argumento Inválido\n
        O que pode estar errado:\n
        Nome incorreto;
        Id Inexistente;
        Nada foi inserido.`
        )
    } else {
        AxiosPokemon(`/${NomePokemon}`).catch(() => {
            alert(`
            Argumento Inválido\n
            O que pode estar errado:\n
            Nome incorreto;
            Id Inexistente;
            Nada foi inserido.`
            )
        })
    }
}

BtnEnviar.addEventListener("click", () => {
    PesquisarPokemon()
})

BtnProx.addEventListener("click", () => {
    const NomePokemon = String((Number(LocalNomeId[1].innerHTML.substring(1))) + 1)
    AxiosPokemon(`/${NomePokemon}`)
})

BtnAnt.addEventListener("click", () => {
    let NomePokemon = String(Number(LocalNomeId[1].innerHTML.substring(1)) - 1)
    AxiosPokemon(`/${NomePokemon}`)
})

let TotalCriado = 0
let Limite = 20
const AxiosPokemonNomeId  = async (Number) => {
    const data = (await axios.get(`https://pokeapi.co/api/v2/pokemon${Number}`)).data
    let AllPoke = ""
    for(let i = 1; data.results.length + 1 > i; i++){
        AxiosPokemonImutavel(`/${i + TotalCriado}`).then((e) => {
            let NomeId = `
            <div class = "passar-poke" tabindex="1">
                <p class="nome">${e.name}</p>
                <p class="id">No${e.id}</p>
            </div>`
            AllPoke += NomeId
            if(TotalCriado === 900){
                if(data.results.length === i){
                    LocalAllPoke.innerHTML += AllPoke
                    TotalCriado++
                }
            }else if(data.results.length === i){
                LocalAllPoke.innerHTML += AllPoke
            }
            const PegarPoke = document.querySelectorAll(".passar-poke")
            for (let i = 0; i < PegarPoke.length; i++) {
                const nomePoke = document.querySelectorAll('.nome')
                PegarPoke[i].addEventListener('click', function(){
                   AxiosPokemon(`/${nomePoke[i].textContent}`)
                })
            }
        })
    }
}

AxiosPokemonNomeId(`/`)

LocalAllPoke.addEventListener("scroll", () => {
    if (TotalCriado < 905) {
        if (LocalAllPoke.lastChild.getBoundingClientRect().bottom <= 814){
            if(TotalCriado === 900){
                AxiosPokemonNomeId(`/?offset=${900}&limit=${5}`)
            } else {
                TotalCriado = 20 + TotalCriado
                AxiosPokemonNomeId(`/?offset=${TotalCriado}&limit=${Limite}`)
            }
        }
    }
})
FormPesquisa.addEventListener('submit', () =>{
    PesquisarPokemon()
})