
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-direita');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = "";
let Btnbranco = false;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = "";
    numero = "";
    Btnbranco = false;

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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`

        let fotosHtml = '';

        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image">
            <img src="img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
        }

        lateral.innerHTML = fotosHtml;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>';
    }
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

function branco(){
    numero = ""
    Btnbranco = true;
    seuVotoPara.style.display = 'block';
    lateral.innerHTML = "";
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>';
}

function corrige(){
    comecarEtapa();
}

function confirmar(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if(Btnbranco === true){
        votoConfirmado = true;
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante pisca">FIM</div>';

        }
    }
}

comecarEtapa();
