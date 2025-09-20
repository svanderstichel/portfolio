function getGithub() {
    window.open("https://github.com/svanderstichel", "_blank");
}
function getLinkedin() {
    window.open("https://www.linkedin.com/in/vanderstichel/", "_blank");
}
function getArticulos() {
    window.open("https://github.com/svanderstichel/aplicacion-gestion-articulos", "_blank");
}
function getRadiacion() {
    window.open("https://github.com/svanderstichel/prediccion-radiacion-solar", "_blank");
}
function getConsultorio() {
    window.open("https://github.com/svanderstichel/consultorio-medico-MedIntegral", "_blank");
}
function getGreed() {
    window.open("https://github.com/svanderstichel/juego-de-dados-Greed", "_blank");
}
function clickMenu() {
    menu = document.getElementById("menu");
    if (menu.style.display == "none" || menu.style.display == "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
function closeMenu(){
    menu = document.getElementById("menu");
    menu.style.display = "none";
}