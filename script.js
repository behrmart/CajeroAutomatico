// Cajero Automático.
// Amelia Fernandez
// Main screen user and password validation


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
      { user: 'Meli', password: '123', saldo: 300 },
      { user: 'Behr', password: '456', saldo: 290 },
      { user: 'Ariel', password: '789', saldo: 67 }
    ];
    
    for (var i = 0; i < cuentas.length; i++) {
      if (cuentas[i].user === user && cuentas[i].password === password) {
        return [true, cuentas[i].saldo];  // User and password are valid
      }
    }
    
    return [false, null];  // User and/or password are invalid
}
  

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

let usuario = document.querySelector('#usuario').value;
let password = document.querySelector('#password').value;

var isValid = validateUserAndPassword(usuario, password);

if (isValid[0]) {
    console.log('User and password are valid.');
    sessionStorage.setItem('usuario', usuario);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('saldo', isValid[1])
    window.location.href="cajero.html"; // Llama a la pagina de Cajero Automatico
  } else {
    console.log('Invalid user and/or password.');
    mostrarError('Datos')
  }
})

