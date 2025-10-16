const btnOnOff = document.querySelector('#btnOnOff');
const lamp = document.querySelector('#lamp');

let quebrada = false // controla o estado da lampada

function lampadaCondicao(){
    return quebrada === true
}


function lampLigada (){
    if(!lampadaCondicao()){
        lamp.src = './img/lampAcesa.png'
    }
}

function lampadaDesligada (){
    if(!lampadaCondicao()){
        lamp.src = './img/lampApagada.png'
    }
}

function lampQuebrada (){
    lamp.src = './img/lampQuebrada.png'
    quebrada = true //Agora ela fica quebrada
}

// Troca de fundo

function lampOnOff(){
    if(btnOnOff.textContent == 'Ligar'){
        lampLigada();
        btnOnOff.textContent = 'Desligar'
    }else{
        lampadaDesligada();
        btnOnOff.textContent = 'Ligar'
    }
}

btnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampLigada);
lamp.addEventListener('mouseleave' , lampadaDesligada)
lamp.addEventListener('dblclick', lampQuebrada)