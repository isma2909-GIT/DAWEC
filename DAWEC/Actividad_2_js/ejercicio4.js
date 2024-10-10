

let precioOriginal = parseFloat(prompt('introduce el precio Original del producto'));

let descuentoOriginal = parseFloat(prompt('introduce el pocentaje a descontar'));


function descontar (precioOriginal, descuentoOriginal){
   
    let precioDescuento = precioOriginal * (descuentoOriginal / 100);
    return precioDescuento.toFixed(2);
}

    let precioFinal = descontar(precioOriginal, descuentoOriginal);

alert(`El precio final del producto después de aplicar un descuento del ${descuentoOriginal}% es: ${precioFinal} euros`);