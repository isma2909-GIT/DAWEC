// 1.1
let greeting = "¡Hola, mundo!";
console.log(greeting);

// 1.2
let age = 25; // Cambia 25 por tu edad
console.log(age);

// 1.3
let isAwesome = true; // O false según tu preferencia
console.log(isAwesome);

// 1.4
let myNullVar = null;
let myUndefinedVar;
console.log(myNullVar, myUndefinedVar);

// 1.5
let article = {
    name: "Camiseta",
    price: 19.99,
    category: "Ropa"
};
console.log(article);

// 1.6
let cities = ["Madrid", "Barcelona", "Valencia"];
console.log(cities);

// 1.7
let favoriteColor = "azul";
console.log(favoriteColor);
favoriteColor = "verde";
console.log(favoriteColor);

// 1.8
let unassignedVar;
let nullVar = null;
console.log(unassignedVar, nullVar);

// 1.9
let outsideVar = "Soy exterior";
function myFunction() {
    let insideVar = "Soy interior";
    console.log(insideVar); // Accede a insideVar
}
myFunction();
console.log(outsideVar); // Accede a outsideVar
// console.log(insideVar); // Esto causará un error

// 1.10
let validVariable = "nombre";
let 1invalidVariable = "nombreInvalido"; // Esto causará un error
console.log(validVariable, "1invalidVariable"); // Muestra solo el nombre válido

// 1.11
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
num1++;
console.log(num1);
num2--;
console.log(num2);

// 1.12
let multiLineString = "Línea 1\nLínea 2\n\tLínea 3 con tabulación";
console.log(multiLineString);