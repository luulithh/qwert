document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
            highlightActivePage();
        });
});

function highlightActivePage() {
    const currentPage = window.location.pathname.split("/").pop().split(".")[0]; // Получаем текущую страницу
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
}
