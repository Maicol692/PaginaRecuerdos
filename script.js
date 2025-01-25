// Alternar el tema claro y oscuro
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

    // Actualizar colores del selector de tema
    themeSelector.style.backgroundColor = window.getComputedStyle(body).backgroundColor;
    themeSelector.style.color = window.getComputedStyle(body).color;
}

// Mostrar u ocultar el menú desplegable
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Configuración inicial: establecer tema predeterminado
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSelector = document.getElementById('theme');

    // Detectar tema previamente seleccionado (almacenado en localStorage)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeSelector.value = savedTheme;
    } else {
        body.classList.add('light'); // Tema predeterminado
    }

    // Actualizar colores del selector
    themeSelector.style.backgroundColor = window.getComputedStyle(body).backgroundColor;
    themeSelector.style.color = window.getComputedStyle(body).color;

    // Guardar el tema seleccionado en localStorage
    themeSelector.addEventListener('change', () => {
        localStorage.setItem('theme', themeSelector.value);
    });
});






