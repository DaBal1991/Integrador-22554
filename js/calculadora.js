
function calcularPrecio() {

    const ticket = 200;
    let cantidad;
    let categoria;
    let valorTicket;
    let total;

    total = document.getElementById("alTotal");
    cantidad = document.getElementById("inputCantidad").value;
    categoria = document.getElementById("cbCategoria").value;

    switch (categoria) {
        case "1":
            valorTicket = ticket * cantidad - (ticket * cantidad * 0.80);
            total.innerHTML = "Total a Pagar: $" + valorTicket;
            break;
        case "2":
            valorTicket = ticket * cantidad - (ticket * cantidad * 0.50);
            total.innerHTML = "Total a Pagar: $" + valorTicket;
            break;
        case "3":
            valorTicket = ticket * cantidad - (ticket * cantidad * 0.15);
            total.innerHTML = "Total a Pagar: $" + valorTicket;
            break;
    }
}

function limpiar() {

    let nombre;
    let apellido;
    let correo;
    let cantidad;

    nombre = document.getElementById("inputNombre").value = null;
    apellido = document.getElementById("inputApellido").value = null;
    correo = document.getElementById("inputEmail").value = null;
    cantidad = document.getElementById("inputCantidad").value = null;

}

let vaciar = document.getElementById("btnBorrar").onclick = limpiar;
let resumen = document.getElementById("btnResumen").onclick = calcularPrecio;