document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("musica");
    audio.volume = 0.5; // Ajusta el volumen si es necesario
});
function crearGirasol() {
    const girasol = document.createElement("div");
    girasol.classList.add("girasol");
    girasol.textContent = "🌻";

    // Posición aleatoria
    girasol.style.left = Math.random() * window.innerWidth + "px";
    girasol.style.top = "-50px"; // Comienza fuera de la pantalla

    // Tamaño aleatorio
    const tamaño = Math.random() * 20 + 20; 
    girasol.style.fontSize = tamaño + "px";

    // Duración de la animación aleatoria
    const duracion = Math.random() * 3 + 2;
    girasol.style.animationDuration = duracion + "s";

    document.querySelector(".container").appendChild(girasol);

    // Eliminar el girasol cuando termine la animación
    setTimeout(() => girasol.remove(), duracion * 1000);
}

// Crear girasoles continuamente
setInterval(crearGirasol, 300)
document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("mostrarVideo");
    let videoContainer = document.getElementById("videoContainer");
    let video = document.getElementById("video");

    boton.addEventListener("click", function () {
        videoContainer.classList.add("show"); // Muestra el video
        video.play(); // Reproduce el video automáticamente
    });

    video.addEventListener("ended", function () {
        videoContainer.classList.remove("show"); // Oculta el video al terminar
    });
});
