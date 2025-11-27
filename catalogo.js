// === PRODUCTOS POR CATEGORÍA ===
const productos = {
    rosas: [
        { nombre: "Ramo de Rosas 1", desc: "Descripción del producto.", img: "img/placeholder.jpg" },
        { nombre: "Ramo de Rosas 2", desc: "Descripción del producto.", img: "img/placeholder.jpg" },
        { nombre: "Ramo de Rosas 3", desc: "Descripción del producto.", img: "img/placeholder.jpg" }
    ],
    gerberas: [
        { nombre: "Ramo de Gerberas 1", desc: "Descripción del producto.", img: "img/placeholder.jpg" },
        { nombre: "Ramo de Gerberas 2", desc: "Descripción del producto.", img: "img/placeholder.jpg" }
    ],
    orquideas: [
        { nombre: "Orquídea Premium", desc: "Descripción del producto.", img: "img/placeholder.jpg" }
    ],
    lirios: [
        { nombre: "Ramo de Lirios 1", desc: "Descripción del producto.", img: "img/placeholder.jpg" },
        { nombre: "Ramo de Lirios 2", desc: "Descripción del producto.", img: "img/placeholder.jpg" }
    ],
    lisianthus: [
        { nombre: "Ramo de Lisianthus 1", desc: "Descripción del producto.", img: "img/placeholder.jpg" }
    ]
};


// === FUNCIÓN PARA CARGAR PRODUCTOS EN EL CATÁLOGO ===
function cargarProductos(tipo) {

    // Cambiar título
    document.getElementById("tituloCatalogo").innerText = tipo.toUpperCase();

    // Renderizar grid
    const contenedor = document.getElementById("gridProductos");
    contenedor.innerHTML = "";

    productos[tipo].forEach(prod => {
        contenedor.innerHTML += `
            <div class="tarjeta-producto">
                <div class="imagen-producto">
                    <img src="${prod.img}" alt="${prod.nombre}">
                </div>
                <h4>${prod.nombre}</h4>
                <p>${prod.desc}</p>
                <a class="btn-whatsapp" href="https://wa.me/521000000000">
                    Cotizar
                </a>
            </div>
        `;
    });

    // Activar color del botón seleccionado
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById("btn-" + tipo).classList.add("active");
}


// === CARGAR LA PRIMERA CATEGORÍA AL INICIAR ===
window.onload = () => {
    cargarProductos("rosas");
};
