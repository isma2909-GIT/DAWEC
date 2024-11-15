

document.getElementById("enviar").addEventListener("click", function() {
    const precio = (document.getElementById("precio").value);
    const cantidad = (document.getElementById("cantidad").value);
    const total = precio * cantidad;
    document.getElementById("total").value = total;
});