// 5.1
// Imprimir los números del 20 al 30
for (let i = 20; i <= 30; i++) {
    console.log(i);
}

// Imprimir los números pares del 30 al 50
for (let i = 30; i <= 50; i += 2) {
    console.log(i);
}

// Calcular la suma de los primeros 50 números naturales
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("Suma de los primeros 50 números naturales:", sum);

// Imprimir la tabla de multiplicar del 8
for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}

// Imprimir los elementos de un array
let array = [1, 2, 3, 4, 5];
for (let elem of array) {
    console.log(elem);
}

// Imprimir un patrón de asteriscos en forma de triángulo, con altura 9
for (let i = 1; i <= 9; i++) {
    console.log('*'.repeat(i));
}

// Calcular la suma de los números pares del 1 al 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}
console.log("Suma de los números pares del 1 al 50:", evenSum);

// Imprimir los números del 30 al 20 en orden descendente
for (let i = 30; i >= 20; i--) {
    console.log(i);
}

// Calcular el promedio de un array de números
let numArray = [10, 20, 30, 40, 50];
let total = 0;
for (let num of numArray) {
    total += num;
}
let average = total / numArray.length;
console.log("Promedio del array:", average);
