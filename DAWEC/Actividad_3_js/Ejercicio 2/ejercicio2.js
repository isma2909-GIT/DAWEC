

// Definir un array con frases frikis o graciosas sobre informática
const frasesFrikisInformatica = [
    "¿Por qué los programadores prefieren el oscuro? Porque la luz atrae a los bugs.",
    "Programar es como escribir un libro... excepto que si te equivocas, no solo lo borras, sino que también lo explotas.",
    "Un programa bien escrito es un programa que se entiende, no uno que funciona.",
    "¿Cuál es el animal más friki? El pingüino de Linux.",
    "Si la vida te da limones, ¡pide un nuevo sistema operativo!",
];

// Definir un array de colores
const colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
];


function cambiarTexto() {
 
    const indiceFraseAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);

    const indiceColorTexto = Math.floor(Math.random() * colores.length);
    const indiceColorBoton = Math.floor(Math.random() * colores.length);

 
    const elementoTexto = document.getElementById('texto-informatica');
    const botonVerMas = document.getElementById('ver-mas-boton');

   
    elementoTexto.textContent = frasesFrikisInformatica[indiceFraseAleatorio];

  
    elementoTexto.style.color = colores[indiceColorTexto];
    botonVerMas.style.backgroundColor = colores[indiceColorBoton];
}
