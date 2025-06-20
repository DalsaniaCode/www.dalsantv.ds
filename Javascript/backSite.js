document.addEventListener('DOMContentLoaded', function() {
    // Cargando Contenido antes de la ejecución
    const site = document.getElementById("backSite");
    // abajo, confirma que funcione bién
    if (site) {
        site.addEventListener("click", function() {
            window.location.href = "https://dalsaniacode.github.io/www.dalsantv.ds";
        });
    } else {
        alert("ERROR: Button for back to home will not work")
    }
});
