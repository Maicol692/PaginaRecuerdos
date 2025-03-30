document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "nvia.html";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    const btn = this;
    const maxWidth = window.innerWidth - btn.clientWidth;
    const maxHeight = window.innerHeight - btn.clientHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});

document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

