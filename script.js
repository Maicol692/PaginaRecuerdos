// Alternar entre temas claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeSelector = document.getElementById('theme');
    const selectedTheme = themeSelector.value;

    // Aplicar el tema seleccionado
    if (selectedTheme === 'dark') {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }

    // Actualizar los colores del selector de tema
    const computedStyles = window.getComputedStyle(body);
    themeSelector.style.backgroundColor = computedStyles.backgroundColor;
    themeSelector.style.color = computedStyles.color;

    // Guardar el tema seleccionado en localStorage
    localStorage.setItem('theme', selectedTheme);
}

// Mostrar u ocultar el menú desplegable
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Configuración inicial: establecer tema predeterminado y eventos
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSelector = document.getElementById('theme');

    // Detectar el tema previamente seleccionado (almacenado en localStorage)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeSelector.value = savedTheme;
    } else {
        body.classList.add('light'); // Tema predeterminado
    }

    // Actualizar los colores del selector al cargar la página
    const computedStyles = window.getComputedStyle(body);
    themeSelector.style.backgroundColor = computedStyles.backgroundColor;
    themeSelector.style.color = computedStyles.color;

    // Agregar evento para guardar el tema seleccionado al cambiar
    themeSelector.addEventListener('change', toggleTheme);
});






