window.onload = function() {
    let quien = ['Mi perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
    let accion = ['se comió', 'perdió', 'aplastó', 'rompió'];
    let que = ['mi tarea', 'las llaves', 'el coche'];
    let cuando = ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras rezaba'];

    function generarExcusa() {
        let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
        let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
        let queAleatoria = que[Math.floor(Math.random() * que.length)];
        let cuandoAleatoria = cuando[Math.floor(Math.random() * cuando.length)];

        let excusa = quienAleatorio + ' ' + accionAleatoria + ' ' + queAleatoria + ' ' + cuandoAleatoria + '.';

        return excusa;
    }

    let elementoExcusa = document.getElementById('excuse');

    elementoExcusa.innerHTML = generarExcusa();
}