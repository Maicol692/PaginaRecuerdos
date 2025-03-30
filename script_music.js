document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Verificar si el usuario ya tenía modo oscuro activado previamente
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Modo Claro";
    }

    // Evento para cambiar entre modos
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            themeToggle.textContent = "Modo Oscuro";
            localStorage.setItem("dark-mode", "disabled"); // Guardar estado en localStorage
        } else {
            body.classList.add("dark-mode");
            themeToggle.textContent = "Modo Claro";
            localStorage.setItem("dark-mode", "enabled"); // Guardar estado en localStorage
        }
    });
});
