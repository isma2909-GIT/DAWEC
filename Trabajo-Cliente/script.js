// Elementos del DOM
const entradaTarea = document.getElementById('taskInput'); // Campo para escribir el texto de la tarea
const etiquetaTarea = document.getElementById('taskTag'); // Selector para elegir la etiqueta (importante, secundaria, urgente, opcional)
const botonAgregarTarea = document.getElementById('addTask'); // Botón para agregar la tarea
const listaTareas = document.getElementById('taskList'); // Contenedor donde se mostrarán las tareas
const botonBorrarTareas = document.getElementById('clearTasks'); // Botón para borrar todas las tareas
const botonAlternarModo = document.getElementById('toggleMode'); // Botón para alternar entre modo oscuro y claro

// Obtener tareas del localStorage, si no existen, se inicializa como un arreglo vacío
let tareas = JSON.parse(localStorage.getItem('tasks')) || [];
let esModoOscuro = localStorage.getItem('isDarkMode') === 'true'; // Verifica si el modo oscuro está activado

// Aplicar el modo oscuro si está activado cuando el contenido está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    aplicarModoOscuro(); // Aplica el modo oscuro al cargar la página
    actualizarListaTareas(); // Actualiza la lista de tareas al cargar la página
});

// Función para aplicar el modo oscuro
function aplicarModoOscuro() {
    document.body.classList.toggle('bg-dark', esModoOscuro); // Cambia el fondo a oscuro
    document.body.classList.toggle('text-white', esModoOscuro); // Cambia el texto a blanco
    botonAlternarModo.textContent = esModoOscuro ? 'Modo Claro' : 'Modo Oscuro'; // Cambia el texto del botón según el modo
}

// Función para actualizar la lista de tareas en la interfaz
function actualizarListaTareas(tareasFiltradas = tareas) {
    listaTareas.innerHTML = ''; // Limpiar la lista actual
    tareasFiltradas.forEach((tarea, indice) => {
        const li = document.createElement('li'); // Crear un elemento de lista para cada tarea
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.setAttribute('data-index', indice); // Asignar el índice de la tarea al atributo "data-index"
        li.setAttribute('draggable', true); // Hacer la tarea arrastrable

        // Añadir clases según si la tarea está completada o no
        const claseTarea = tarea.completada ? 'text-decoration-line-through text-muted' : '';
        const claseBoton = tarea.completada ? 'btn-secondary' : 'btn-success';
        const textoBoton = tarea.completada ? 'Deshacer' : 'Hecha';

        // Definir el contenido HTML de la tarea
        li.innerHTML = `
            <a href="./Pagina_tareas.html?id=${indice}" class="task-link text-dark text-decoration-none ${claseTarea}">
                ${tarea.texto} <span class="badge bg-${tarea.etiqueta}">${tarea.etiqueta.charAt(0).toUpperCase() + tarea.etiqueta.slice(1)}</span>
            </a>
            <div>
                <button class="btn ${claseBoton} btn-sm completar-tarea" data-index="${indice}">${textoBoton}</button>
                <button class="btn btn-danger btn-sm eliminar-tarea" data-index="${indice}">Eliminar</button>
            </div>
        `;
        listaTareas.appendChild(li); // Agregar la tarea a la lista
    });
    localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar las tareas actualizadas en el localStorage
}

// Función para alternar entre el modo oscuro y claro
botonAlternarModo.addEventListener('click', () => {
    esModoOscuro = !esModoOscuro; // Cambiar el valor de la variable
    localStorage.setItem('isDarkMode', esModoOscuro); // Guardar la preferencia en el localStorage
    aplicarModoOscuro(); // Aplicar el modo seleccionado
});

// Función para agregar una nueva tarea
function agregarTarea() {
    const textoTarea = entradaTarea.value.trim(); // Obtener el texto de la tarea
    const valorEtiqueta = etiquetaTarea.value; // Obtener la etiqueta seleccionada
    
    // Verificar que el texto de la tarea no esté vacío
    if (textoTarea !== '') {
        const nuevaTarea = {
            texto: textoTarea, // Asignar el texto de la tarea
            etiqueta: valorEtiqueta, // Asignar la etiqueta de la tarea
            completada: false, // Inicialmente la tarea no está completada
        };
        
        tareas.push(nuevaTarea); // Agregar la nueva tarea al arreglo
        localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar la lista de tareas en el localStorage
        entradaTarea.value = ''; // Limpiar el campo de entrada
        etiquetaTarea.value = 'important'; // Restablecer la etiqueta seleccionada a "Importante"
        actualizarListaTareas(); // Actualizar la lista de tareas
    }
}

// Función para marcar una tarea como completada o desmarcarla
function alternarCompletadoTarea(indice) {
    tareas[indice].completada = !tareas[indice].completada; // Cambiar el estado de la tarea
    localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar las tareas actualizadas en el localStorage
    actualizarListaTareas(); // Actualizar la lista de tareas
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
    tareas.splice(indice, 1); // Eliminar la tarea del arreglo
    localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar las tareas actualizadas en el localStorage
    actualizarListaTareas(); // Actualizar la lista de tareas
}

// Función para borrar todas las tareas
function borrarTareas() {
    tareas = []; // Vaciar el arreglo de tareas
    localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar el arreglo vacío en el localStorage
    actualizarListaTareas(); // Actualizar la lista de tareas
}

// Función para filtrar tareas según el estado o la etiqueta
function filtrarTareas(filtro) {
    return tareas.filter(tarea => 
        filtro === 'all' ? true : // Mostrar todas las tareas
        filtro === 'pending' ? !tarea.completada : // Mostrar solo las tareas pendientes
        filtro === 'completed' ? tarea.completada : // Mostrar solo las tareas completadas
        tarea.etiqueta === filtro // Filtrar por etiqueta (importante, urgente, etc.)
    );
}

// Función para manejar el clic en los botones de filtro
function manejarClickFiltro(e) {
    const filtro = e.target.dataset.filter; // Obtener el filtro seleccionado
    actualizarListaTareas(filtrarTareas(filtro)); // Filtrar las tareas y actualizar la lista
}

// Funcionalidad de arrastrar y soltar
listaTareas.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging'); // Marcar la tarea como arrastrada
});

listaTareas.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging'); // Quitar la clase de tarea arrastrada
    guardarOrdenTareas(); // Guardar el nuevo orden de las tareas
});

// Permitir el movimiento de las tareas arrastradas
listaTareas.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado
    const arrastrando = document.querySelector('.dragging'); // Obtener el elemento arrastrado
    const despuesElemento = obtenerElementoArrastrado(listaTareas, e.clientY); // Obtener el elemento debajo del que estamos arrastrando
    if (despuesElemento == null) {
        listaTareas.appendChild(arrastrando); // Colocar la tarea al final si no hay un elemento debajo
    } else {
        listaTareas.insertBefore(arrastrando, despuesElemento); // Insertar la tarea antes del elemento debajo
    }
});

// Obtener el elemento más cercano debajo del que estamos arrastrando
function obtenerElementoArrastrado(contenedor, y) {
    return [...contenedor.querySelectorAll('li:not(.dragging)')]
        .reduce((masCercano, hijo) => {
            const caja = hijo.getBoundingClientRect(); // Obtener la posición del elemento
            const desplazamiento = y - caja.top - caja.height / 2; // Calcular la distancia
            return desplazamiento < 0 && desplazamiento > masCercano.offset ? { offset: desplazamiento, element: hijo } : masCercano;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Guardar el nuevo orden de las tareas después de un arrastre
function guardarOrdenTareas() {
    tareas = [...listaTareas.children].map(li => tareas[li.getAttribute('data-index')]); // Crear un nuevo arreglo con el orden actualizado
    localStorage.setItem('tasks', JSON.stringify(tareas)); // Guardar el nuevo orden en el localStorage
    actualizarListaTareas(); // Actualizar la lista de tareas
}

// Escuchar eventos en la lista de tareas
listaTareas.addEventListener('click', (e) => {
    if (e.target.classList.contains('completar-tarea')) {
        alternarCompletadoTarea(e.target.dataset.index); // Marcar tarea como completada
    } else if (e.target.classList.contains('eliminar-tarea')) {
        eliminarTarea(e.target.dataset.index); // Eliminar tarea
    }
});

// Escuchar eventos de botones principales
botonAgregarTarea.addEventListener('click', agregarTarea); // Agregar tarea
botonBorrarTareas.addEventListener('click', borrarTareas); // Borrar todas las tareas
document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', manejarClickFiltro)); // Filtrar tareas
