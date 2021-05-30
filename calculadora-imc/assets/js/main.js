////Parar o envio do formulário, capturar evento de submit do formulário.////
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso'); //Por que target e não document?
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }


    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3]; 
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1]; 
    if(imc < 18.5) return nivel[0];

    /* //a forma completa
    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    }
    else if (imc >= 29.9) {
        return nivel[3]  
    }
    else if (imc >= 24.9) {
        return nivel[2]
    }
    else if (imc >= 18.5) {
        return nivel[1]  
    } else if(imc < 18.5) {
        return nivel[0]
    }
    */
};


/////CRIAR ELEMENTO P
function criaP () {
     const p = document.createElement('p');
     return p;
}

////CRIAR UMA FUNÇÃO PARA COLOCAR O RESULTADO/////
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP(); 

    if (isValid) 
    { p.classList.add('paragrafo-resultado')} else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p) //Inserir elemento p
};
