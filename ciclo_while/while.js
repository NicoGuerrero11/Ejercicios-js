// 1. Crea un programa que pregunte al usuario un número.
// Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let number = Number(prompt("escribe un numero: "));
let i = 1;
while (i <= number){
    if(i % 5 == 0){
        console.log(i);
    }
    i++;
}  

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50,
// pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

const num1 = Number(prompt("elige el primer numero: "));
const num2 = Number(prompt("elige el segundo numero: "));

let a = 1;
while (a <= 50){
    if (a == num1 || a == num2){
        console.log("Loteria");
    }else{
        console.log(a);
    }
    a++;
} 

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
// Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const arr = [];
let b = Number(prompt("escribe un numero: "));
while (b != 0){
    arr.push(b);
    b = Number(prompt("escribe un numero o ingrese -0- para salir: "));
}
console.log(arr);

// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado.
// Para terminar de capturar el usuario no debe escribir valor alguno.
// Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

const ar = [];
let phrase = prompt("ingrese palabra o letra: ");
while(phrase != "exit"){
    ar.push(phrase);
    phrase = prompt("ingrese palabra o letra -escriba 'exit' para terminar: ");
}
console.log(ar);
console.log(ar.toString(" ")); 

// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc).
// El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día.
// En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let dia = prompt("escribe un dia de la semana: ");

//con if-else if

/* while(true){
    if (dia == "lunes"){
        alert("que mierda");
    }else if (dia == "martes"){
        alert("estamos mejor");
    }else if(dia == "miercoles"){
        alert("hoy hay fubo");
    }else if(dia == "jueves"){
        alert("se acerca el viernes");
    }else if(dia == "viernes"){
        alert("por fin!!");
    }else if(dia == "sabado"){
        alert("hoy se sale");
    }else if (dia == "domingo"){
        alert("hoy se descansa")
        break;
    }else{
        alert("no seleccionaste un dia");
    }
    dia = prompt("escribe un dia de la semana: ");
} */


// con switch
while(true){
    if(dia == "domingo"){
        alert("hoy se descansa");
        break;
    }else{
        switch(dia){
            case "lunes":
                alert("que mierda");
                break;
            case "martes":
                alert("estamos mejor");
                break;
            case "miercoles":
                alert("hoy hay fubo");
                break;
            case "jueves":
                alert("se acerca el viernes");
                break;
            case "viernes":
                alert("por fin!!");
                break;
            case "sabado":
                alert("hoy se sale");
                break;
            default:
                alert("no seleccionaste un dia");
                break;
        }
    }
    dia = prompt("escribe un dia de la semana: ");
}