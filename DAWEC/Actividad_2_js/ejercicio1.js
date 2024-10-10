

let alojamiento = parseFloat(prompt("Gastos de alojamiento (€):"))
let alimentacion = parseFloat(prompt("Gastos de alimentación (€):"))
let entretenimiento = parseFloat(prompt("Gastos de entretenimiento (€): "))
let total = alojamiento + alimentacion + entretenimiento

console.log(`El gasto total del viaje es : ${total.toFixed(2)} €`)