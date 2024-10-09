// 2.1
let number = -5; // Cambia el número según prefieras
if (number > 0) {
    console.log("El número es positivo.");
} else if (number < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 2.2
let personAge = 20; // Cambia la edad según prefieras
if (personAge < 18) {
    console.log("Menor de edad");
} else if (personAge < 65) {
    console.log("Adulto");
} else {
    console.log("Anciano");
}

// 2.3
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2.4
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// 2.5
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);

// 2.6
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// 2.7
for (let j = 0; j < 5; j++) {
    if (j === 2) {
        continue;
    }
    console.log(j);
}

// 2.8
let monthNumber = prompt("Ingresa un número del 1 al 12 para saber el mes correspondiente:");
switch (parseInt(monthNumber)) {
    case 1: console.log("Enero"); break;
    case 2: console.log("Febrero"); break;
    case 3: console.log("Marzo"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Mayo"); break;
    case 6: console.log("Junio"); break;
    case 7: console.log("Julio"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Septiembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Noviembre"); break;
    case 12: console.log("Diciembre"); break;
    default: console.log("Número inválido");
}
