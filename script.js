const formulario = document.querySelector('#formulario')

const dbUSER = 'Mali'
const dbPASSWORD = '123'

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
    if(usuario === dbUSER && password === dbPASSWORD){
        console.log('Bienvenido');
    }
    else if(usuario === '' && password === ''){
        console.log('INGRESA TUS DATOS');
        mostrarError('Datos')
    }
    else if(usuario != dbUSER){
        console.log('Usuario incorrecto');
        mostrarError('Usuario')
    }
    else if(password != dbPASSWORD){
        console.log('Password incorrecto');
        mostrarError('Password')
    }
    else{
        console.log('Error, datos incorrectos');
    }
}

formulario.addEventListener('submit', (evento)=>{
evento.preventDefault()
let usuario = document.querySelector('#usuario').value
let password = document.querySelector('#password').value
validarDatos(usuario, password)
})

