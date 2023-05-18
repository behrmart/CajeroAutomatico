const formulario = document.querySelector('#formulario')

const dbUSER = 'Mali'
const dbPASSWORD = '123'

var cuentas = [
    { user: 'Mali', password: '123', saldo: 200 },
    { user: 'Gera', password: '456', saldo: 290 },
    { user: 'Maui', password: '789', saldo: 67 }
  ];

  console.log(cuentas[0].user);

function mostrarError(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 5000)
}


function validarDatos(usuario, password){
    
    var nombreExiste = cuentas.some(function(cuenta) {
         return cuenta.user === usuario });
        //Valida que el usuario se encuentre en el array usando el metodo some() Regresa true si usuario existe
               
    if (nombreExiste) {
        console.log('Usuario OK');        
        encuentraPass = cuentas.find(function(contra) {return contra.contrasenia === password});
        
    } else {
        console.log('Error, Usuario Invalido');
    }
}

formulario.addEventListener('submit', (evento)=>{
evento.preventDefault()
let usuario = document.querySelector('#usuario').value
let password = document.querySelector('#password').value
validarDatos(usuario, password)
})

