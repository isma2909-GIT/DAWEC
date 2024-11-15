
function toggleBox() {
    const box = document.getElementById('box');
    const button = document.getElementById('toggleBtn');

    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        button.textContent = 'Ocultar Caja';
    } else {
        box.style.display = 'none';
        button.textContent = 'Mostrar Caja';
    }
}


document.getElementById('toggleBtn').addEventListener('click', toggleBox);