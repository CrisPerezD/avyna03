document.addEventListener("DOMContentLoaded", function () {
    // Buscar todos los enlaces con data-page
    document.querySelectorAll("[data-page]").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita navegación completa
            const page = this.getAttribute("data-page");

            // Mostrar en consola para depuración
            console.log("Cargando página:", page);

            // Usar fetch para traer el contenido
            fetch(page)
                .then(response => {
                    if (!response.ok) throw new Error("Error al cargar: " + page);
                    return response.text();
                })
                .then(html => {
                    document.getElementById("content-area").innerHTML = html;
                })
                .catch(err => console.error(err));
        });
    });
});
