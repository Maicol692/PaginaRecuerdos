const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Verificar el tema guardado en localStorage
if (localStorage.getItem("theme") === "dark-mode") {
    body.classList.add("dark-mode");
}

// Evento para alternar tema
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Guardar el tema en localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "light-mode");
    }
});

