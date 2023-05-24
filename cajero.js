// Cajero Automático
// JavaScript code for cajero screen

const formDeposito = document.querySelector('#formDeposito')

const usuario = sessionStorage.getItem('usuario'); //El usuario es constante
let saldo = sessionStorage.getItem('saldo'); //Variable saldo Global para este JS

console.log('usuario: ' + usuario);
console.log('saldo: ' + saldo);

document.getElementById("bienvenido").innerHTML = 'Bienvenido ' + usuario; // Crea mensaje de bienvenida


function consultarSaldo() {
    displaySaldo = document.getElementById("despliegaSaldo");
    displaySaldo.innerHTML = 'Tu saldo es: ' + saldo;
    displaySaldo.classList.remove('escondido');
}


formDeposito.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    let cantidad = document.querySelector('#depositoCant').value;
    console.log(cantidad);
    nuevoSaldo = document.querySelector('#nuevoSaldo');
    saldo = parseInt(cantidad) + parseInt(saldo);
    nuevoSaldo.innerHTML = 'Tu nuevo saldo es: ' + saldo;
    nuevoSaldo.classList.remove('escondido');
})


/* Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.
About */