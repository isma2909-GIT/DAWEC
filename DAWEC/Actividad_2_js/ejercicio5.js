

function esPrimo(numero) {
    if (numero <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}


let num1 = parseInt(prompt("Inserta el primer número:"));
let num2 = parseInt(prompt("Inserta el segundo número:"));



let numerosPrimos = [];


for (let i = num1; i <= num2; i++) {
    if (esPrimo(i)) {
        numerosPrimos.push(i); 
    }
}


    alert(`Los números primos entre ${num1} y ${num2} son: ${numerosPrimos.join(", ")}`);


