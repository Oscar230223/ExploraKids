document.addEventListener("DOMContentLoaded", function() {
    const dynamicFooter = document.getElementById("dynamic-footer");
    const message = 
        `
            Contáctanos - 656 123 5559<br>
            © Contenido exclusivo de Explora Kids<br>
            ¡Aprendo y conozco mientras me divierto! 
        `;
    dynamicFooter.innerHTML = message;
});