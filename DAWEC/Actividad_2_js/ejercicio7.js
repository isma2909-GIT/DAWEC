function celsiusToFahrenheit(celsius) {
   
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
   
    return (fahrenheit - 32) * 5/9;
}

function main() {
    
    const conversionType = prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):");

    
    let temperature;
    if (conversionType === '1') {
        
        temperature = parseFloat(prompt("Inserta la temperatura en grados Celsius:"));
        const fahrenheit = celsiusToFahrenheit(temperature);
        console.log(`${temperature} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
        
    } else if (conversionType === '2') {

        temperature = parseFloat(prompt("Inserta la temperatura en grados Fahrenheit:"));
        const celsius = fahrenheitToCelsius(temperature);
        console.log(`${temperature} grados Fahrenheit equivalen a ${celsius.toFixed(2)} grados Celsius.`);

    } else {
        console.log("Opción no válida. Por favor, elige 1 o 2.");
    }
}


main();