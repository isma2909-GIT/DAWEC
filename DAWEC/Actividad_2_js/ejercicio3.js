



let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let altura = parseFloat(prompt("Ingrese su altura en m:"));


let imc = peso / (altura * altura);
imc = imc.toFixed(2); 


let clasificacion;
if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc < 25) {
    clasificacion = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    clasificacion = "Sobrepeso";
} else {
    clasificacion = "Obesidad";
}


alert(`IMC: ${imc}, Clasificación: ${clasificacion}`);
