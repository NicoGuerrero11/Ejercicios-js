// ejercicio 1
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const num = [];

for(index = 0; index < 10; index++){
    num.push(0)
}

for (let i = 0; i <= 100; i++) {
    // aleatorio entre 0 y 9
    let randomIndex = random(0, 9);
    // incremento las apariciones de este valor
    num[randomIndex]++;
}
console.log(num);

// ejercicios 2
let words = prompt("ingresa varios datos separados con coma: ")
console.log(words);
let lista = words.split(',');
console.log(lista);


// ejercicio 3
let number = [10,40,30,20,15,5];
number.sort(function(a,b){return a - b});
console.log(number);
console.log(number.slice(0,1));
console.log(number.slice(length -1));
