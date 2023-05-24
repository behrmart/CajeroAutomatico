// Cajero Automático
// JavaScript code for cajero screen

const formDeposito = document.querySelector('#formDeposito');
const formRetiro = document.querySelector('#formRetiro');

const usuario = sessionStorage.getItem('usuario'); //El usuario es constante. Usa sessionStorage para pasar datos de pagina principal
let saldoTxt = sessionStorage.getItem('saldo'); //Variable saldo Global para este JS. Viene como string de sessionStorage

let saldo = parseInt(saldoTxt); // Convierte a Int. Saldo debe ser tipo numerico global

console.log('usuario: ' + usuario); //Debug
console.log('saldo: ' + saldo); //Debug

document.getElementById("bienvenido").innerHTML = 'Bienvenido ' + usuario; // Crea mensaje de bienvenida


function controlaSaldo(saldo){     // Controla que el saldo sea mayor que $9 y menor que $990
    console.log('controlaSaldo: ' + saldo); //Debug
    if (saldo >= 10 && saldo <= 990 ) {
        return true;
    } else {
        return false;
    }
}

function consultarSaldo() { //Despliega Saldo
    displaySaldo = document.getElementById("despliegaSaldo");
    console.log('consultaSaldo: ' + saldo) //Debug
    displaySaldo.innerHTML = 'Tu saldo es: ' + saldo;
    displaySaldo.classList.remove('escondido');
}


formDeposito.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    let cantidad = document.querySelector('#depositoCant').value;
    console.log('Deposito: '+ cantidad); //Debug
    let nuevoSaldo = document.querySelector('#nuevoSaldo');
    let saldoPaso = parseInt(cantidad) + saldo;
    
    if (controlaSaldo(saldoPaso)){
        saldo = saldoPaso;
        nuevoSaldo.innerHTML = 'Tu nuevo saldo es: ' + saldo;
        nuevoSaldo.classList.remove('escondido');
    } else {
        nuevoSaldo.innerHTML = 'Tu saldo no puede ser menor que $10 o mayor que $990';
        nuevoSaldo.classList.remove('escondido');
    }

})

formRetiro.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    let cantidad = document.querySelector('#retiroCant').value;
    console.log('Retiro: ' + cantidad); //Debug
    nuevoSaldoRetiro = document.querySelector('#nuevoSaldoRetiro');
    
    let saldoPaso = saldo - parseInt(cantidad);
    console.log('saldoPaso Retiro: ' + saldoPaso); //Debug

    if (controlaSaldo(saldoPaso)){
        saldo = saldoPaso;
        nuevoSaldoRetiro.innerHTML = 'Tu nuevo saldo es: ' + saldo;
        nuevoSaldoRetiro.classList.remove('escondido');
    } else {
        nuevoSaldoRetiro.innerHTML = 'Tu saldo no puede ser menor que $10 o mayor que $990';
        nuevoSaldoRetiro.classList.remove('escondido');
    }
})



/* Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.
About */