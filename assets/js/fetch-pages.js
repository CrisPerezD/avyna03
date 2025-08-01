document.addEventListener("click", function (e) {
    // Buscar si el click fue en un elemento con data-page o dentro de él
    const link = e.target.closest("[data-page]");
    if (!link) return; // Si no es un data-page, salir

    e.preventDefault(); // Evita navegación completa
    const page = link.getAttribute("data-page");

    console.log("Cargando página:", page); // Para depuración

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar: " + page);
            return response.text();
        })
        .then(html => {
            document.getElementById("content-area").innerHTML = html;

            // Si usas feather icons, refrescar iconos
            if (window.feather) {
                feather.replace();
            }
        })
        .catch(err => console.error(err));
});
