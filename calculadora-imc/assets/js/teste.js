// const form = querySelector('#formulario');

// form.addEventListener('submit', function (e) {
//     e.preventDefault
// });


const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    console.log(inputAltura, inputPeso)
});

