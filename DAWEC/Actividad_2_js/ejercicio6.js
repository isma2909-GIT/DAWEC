function fibonacci(n) {
    
    const fibSequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        [a, b] = [b, a + b]; 
    }

    return fibSequence;
}

    
    const n = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));
 
    const fibTerms = fibonacci(n);

   
    console.log(`Los primeros ${n} términos de la secuencia Fibonacci son: ${fibTerms.join(", ")}`);



