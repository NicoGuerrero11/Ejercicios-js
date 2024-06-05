// datos del banco
let cuentas = [
    { nombre: "Nico", saldo: 200, password: "12345" },
    { nombre: "Javi", saldo: 290, password: "12345"},
    { nombre: "Pepe", saldo: 67, password: "12345" },
    { nombre: "Marce", saldo: 300, password: "12345"}
];


// variables
const inputUser = document.querySelector("#inputUser");
const inputPassword = document.querySelector("#inputPassword");
const btn = document.querySelector(".btn");
const botonSaldo = document.querySelector("#botonSaldo");
const botonDeposito = document.querySelector("#botonDeposito");
const botonRetiro = document.querySelector("#botonRetiro");

//funcion de validacion
const inicioSesion = (e) => {
    e.preventDefault()
    for (let i = 0; i < cuentas.length; i++){
        if (inputUser.value === cuentas[i].nombre && inputPassword.value == cuentas[i].password){
            location.href = "principal.html";
            inputUser.value = '';
            inputPassword.value = '';
            return;
        }
    }
    alert("usuario o password incorrecta");
}



// consultar saldo
const saldo = () => {
    alert("funciona");
}


// depositar monto


// retirar monto




btn.addEventListener('click', inicioSesion);
botonSaldo.addEventListener('click', saldo);