// Cajero Automático
// JavaScript code for cajero screen


const usuario = sessionStorage.getItem('usuario');
const saldo = sessionStorage.getItem('saldo');

console.log('usuario: ' + usuario);
console.log('saldo: ' + saldo);

document.getElementById("bienvenido").innerHTML = 'Bienvenido ' + usuario;


function consultarSaldo() {
    displaySaldo = document.getElementById("despliegaSaldo");
    displaySaldo.innerHTML = 'Tu saldo es: ' + saldo;
    displaySaldo.classList.remove('escondido');
}

function calculaDeposito(){
    cantidad = document.querySelector('depositoCant').value;
    nuevoSaldo = document.querySelector('nuevoSaldo');
    nuevoSaldo.innerHTML = 'Tu nuevo saldo es: ' + parseInt(cantidad + saldo); 
}


/* function mostrarSaldo(usuario){
    let saldoVar = document.getElementById(`consultarSaldo`)
    saldoVar.classList.remove('escondido')
    saldoVar.classList.add('saldo')

    setTimeout(()=>{
        error.classList.remove('saldo')
        error.classList.add('escondido')
    }, 5000)
} */


/* formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    mostrarSaldo('Mali')

}) */