// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
let bello = prompt("eres bellisimo/a? ");
if(bello == "si"){
    console.log("ciertamente");
}else{
    console.log("No te creo");
}

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
let num = Number(prompt("escribe un numero: "));
if(num % 2 == 0){
    console.log(`${num} es divisible entre 2`);
}else{
    console.log(`${num} no es divisible entre 2`);
}

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
let par = Number(prompt("escribe un nuemro: "));
if(par % 2 == 0){
    alert("es par");
}else{
    alert("no es par");
}

// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
let usuario = Number(prompt("ingrese un numero: "));
if(usuario == 100){
    console.log("Ganaste un premio");
}else{
    console.log("lo sentimos, sigue participando");
}

// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
let num1 = Number(prompt("ingrese numero 1: "));
let num2 = Number(prompt("ingrese numero 2: "));
if(num1 > num2){
    console.log(`${num2} es menor que ${num1}`);
}else{
    console.log(`${num1} es menor que ${num2}`); 
}

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
let numero1 = Number(prompt("ingrese numero 1: "));
let numero2 = Number(prompt("ingrese numero 2: "));
let numero3 = Number(prompt("ingrese numero 3: "));

if(numero1 >= numero2){
    if(numero1 >= numero3){
        console.log(`el numero ${numero1} es el mayor`);
    }else{
        console.log(`el numero ${numero3} es el mayor`);
    }
}else{
    if(numero2 >= numero3){
        console.log(`el numero ${numero2} es el mayor`);
    }else{
        console.log(`el numero ${numero3} es el mayor`);
    }
}

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes,
//otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
let dia = prompt("Escriba un dia de la semana: ").toLowerCase;
if(dia == "lunes"){
    console.log("uff aburrido");
}else if(dia == "viernes"){
    console.log("hoy hay ravee");
}else if(dia == "sabado" || dia == "domingo"){
    console.log("que rico, se descansa");
}else{
    console.log("ese dia no me interesa");
} 

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango,
// si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let calificacion = Number(prompt("ingrese una calificacion '1 al 10': "));
 if(calificacion < 1 || calificacion > 10){
    console.log("error, no ingreso dentro del rango");
}else if(calificacion < 6){
    console.log("reprobado");
}else if(calificacion <= 8){
    console.log("regular");
}else if(calificacion == 9){
    console.log("bien");
}else{
    console.log("excelente");
} 

// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
// “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

console.log("Helado con toppings\n\n");
console.log("1 - oreo - $10");
console.log("2 - KitKat - $15");
console.log("3 - Brownie -$20");
console.log("4 - sin topping - $50");
console.log("\n\n");

let helado = prompt("seleccione el topping que gusta: ").toLowerCase();
let costo = 50;

switch(helado){
    case "oreo":
        console.log("elegiste el topping de oreo");
        console.log(`El costo es de ${costo + 10} mxn`);
        break;
    case "kitkat":
        console.log("elegiste el topping de Kit Kat");
        console.log(`el costo es de ${costo + 15} mxn`);
        break;
    case "brownie":
        console.log("elegiste el topping de Brownie");
        console.log(`el costo es de ${costo + 20} mxn`);
        break;
    case "sin topping":
        console.log("elegiste sin topping");
        console.log(`el costo es de ${costo} mxn`);
        break;
    default:
        console.log("lo lamento no contamos con ese topping");
        console.log(`tu precio queda en ${costo} `);
        break;
}




// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
// Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido,
// tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

const course = 4999 * 2;
const carrera = 3999 * 6;
const master = 2999 * 12;

function descuento(i){
    console.log("becas\n");
    console.log("Beca Facebook: 20% de descuento.");
    console.log("Beca Google: 15% de descuento.");
    console.log("Beca Jesua: 50% de descuento.");
    console.log("sin beca");
    console.log("\n\n");
    let beca = prompt("seleccione beca: ").toLowerCase();

    if (beca == "facebook"){
        console.log(`el pago total incluyendo la beca es de: ${ i * 0.8} mxn `);
    }else if(beca == "google"){
        console.log(`el pago total incluyendo la beca es de: ${i * 0.85} mxn `);
    }else if(beca == "jesua"){
        console.log(`el pago total incluyendo la beca es de: ${i * 0.5} mxn `);
    }else{
        console.log("no selecciono ninguna beca");
        console.log(`su total de pago es de ${i} mxn`);
    }
}

console.log("cursos\n");
console.log("course");
console.log("carrera");
console.log("master");
console.log("\n\n");

let programa = prompt("que tipo de programa quiere realizar: ");

switch(programa){
    case "course":
        console.log("selecciono course");
        descuento(course);
        break;
    case "carrera":
        console.log("selecciono carrera");
        descuento(carrera);
        break;
    case "master":
        console.log("selecciono master");
        descuento(master);
        break;
}




