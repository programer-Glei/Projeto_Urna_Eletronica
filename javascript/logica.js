
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = "";

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = "";

    for(let i=0; i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += `<div class="numero pisca"></div>`;
        }else{
            numeroHtml += `<div class="numero"></div>`;
        }
    }

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = "";
    aviso.style.display = "none";
    lateral.innerHTML = "";
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    let 
}

function clicou(n){
    let elementoPisca = document.querySelector('.numero.pisca')
    console.log("clicou"+n)
    if(elementoPisca != null){
        elementoPisca.innerHTML = n
        numero = `${numero}${n}`

        elementoPisca.classList.remove('pisca');
        if(elementoPisca.nextElementSibling !== null){
            elementoPisca.nextElementSibling.classList.add('pisca')
        }else{
            atualizaInterface();
        }
    }
}

comecarEtapa();
