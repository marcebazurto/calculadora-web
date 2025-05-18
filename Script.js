const pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}

// Permitir entrada por teclado
document.addEventListener("keydown", function (event) {
    const tecla = event.key;

    // Números y operaciones válidas
    if (/[0-9+\-*/.]/.test(tecla)) {
        agregar(tecla);
    }

    // Enter = calcular
    if (tecla === "Enter") {
        calcular();
    }

    // Escape o C = limpiar
    if (tecla === "Escape" || tecla.toLowerCase() === "c") {
        limpiar();
    }

    // Evitar que se escriba manualmente si el input está deshabilitado
    event.preventDefault();
});
