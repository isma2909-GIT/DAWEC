
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
}

let radius = parseFloat(prompt("Ingrese el radio del círculo:"));
console.log("Área:", calculateArea(radius));
console.log("Perímetro:", calculatePerimeter(radius));


function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

let result = calculatePower(2, 3);
console.log(result); 
