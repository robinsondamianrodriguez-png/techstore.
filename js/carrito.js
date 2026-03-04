// ===============================
// AGREGAR PRODUCTOS AL CARRITO
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", function () {

    // BOTONES AGREGAR
    let botones = document.querySelectorAll(".btn-agregar");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {

            let nombre = this.dataset.nombre;
            let precio = parseInt(this.dataset.precio);

            carrito.push({ nombre, precio });

            localStorage.setItem("carrito", JSON.stringify(carrito));

            window.location.href = "carrito.html";
        });
    });

    // MOSTRAR CARRITO (si estamos en carrito.html)
    if (document.getElementById("lista-carrito")) {
        mostrarCarrito();
    }

});


// ===============================
// MOSTRAR CARRITO
// ===============================

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let lista = document.getElementById("lista-carrito");
    let totalElemento = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${producto.nombre} - $${producto.precio.toLocaleString()}
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">X</button>
            </li>
        `;
    });

    totalElemento.innerText = "$" + total.toLocaleString();
}


// ===============================
// ELIMINAR PRODUCTO
// ===============================

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
