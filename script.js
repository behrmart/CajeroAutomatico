const formulario = document.querySelector('#formulario')


function mostrarError(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 5000)
}


function validateUserAndPassword(user, password) {
    var cuentas = [
      { user: 'Mali', password: '123', saldo: 200 },
      { user: 'Gera', password: '456', saldo: 290 },
      { user: 'Maui', password: '789', saldo: 67 }
    ];
    
    for (var i = 0; i < cuentas.length; i++) {
      if (cuentas[i].user === user && cuentas[i].password === password) {
        return true;  // User and password are valid
      }
    }
    
    return false;  // User and/or password are invalid
}
  

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

let usuario = document.querySelector('#usuario').value;
let password = document.querySelector('#password').value;

var isValid = validateUserAndPassword(usuario, password);

if (isValid) {
    console.log('User and password are valid.');
    window.location.href="cajero.html"; // Llama a la pagina de Cajero Automatico
  } else {
    console.log('Invalid user and/or password.');
    mostrarError('Datos')
  }
})

