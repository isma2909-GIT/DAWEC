


function calculateFactorial(number) {
  
    let result = 1;

    
    for (let i = 1; i <= number; i++) {
        result *= i; 
    }

    return result; 
}

function main() {
   
    const n = parseInt(prompt("Inserta un número entero no negativo:"));
    
    const factorial = calculateFactorial(n);
    console.log(`El factorial de ${number} es: ${factorial}`);
}


main();