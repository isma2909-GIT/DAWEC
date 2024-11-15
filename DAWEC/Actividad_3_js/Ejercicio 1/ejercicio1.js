const frases = [
    "¿Por qué los programadores prefieren el oscuro? Porque la luz atrae a los bugs.",
    "Programar es como escribir un libro... excepto que si te equivocas, no solo lo borras, sino que también lo explotas.",
    "Un programa bien escrito es un programa que se entiende, no uno que funciona.",
    "¿Cuál es el animal más friki? El pingüino de Linux.",
    "Si la vida te da limones, ¡pide un nuevo sistema operativo!",
];

// Función para cambiar el texto de forma aleatoriam 
function cambiarTexto() {
  
    const indiceAleatorio = Math.floor(Math.random() * frases.length);

    const elementoTexto = document.getElementById('texto-informatica');
   
    elementoTexto.textContent = frases[indiceAleatorio];
}

