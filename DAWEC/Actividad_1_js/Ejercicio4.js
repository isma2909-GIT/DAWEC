// 4.1
let count = parseInt(prompt("Ingresa la cantidad de números:"));
let numbers = [];

for (let i = 0; i < count; i++) {
    numbers[i] = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
}

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

console.log("El número más grande es:", findLargestNumber(numbers));
