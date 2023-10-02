fetch("./productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("productos", JSON.stringify(datos));
    // mostrarProductos();
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });

document.addEventListener("DOMContentLoaded", () => {
  const cardProductos = document.getElementById("card-productos"); 
  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  if (datosProductos) {
    mostrarProductos(cardProductos, datosProductos); 
  } else {
    console.warn("No se encontraron datos de productos en localStorage.");
  }
});

function mostrarProductos(cardProductos, datosProductos) {
  cardProductos.innerHTML = "";

  datosProductos.forEach((producto) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-Item"); 

    cardItem.innerHTML = `
      <h4>${producto.nombre}</h4>
      <img src="${producto.imagenes[0]}" class="img-card-item">
    `;

    const botonDetalles = document.createElement("button");
    botonDetalles.classList.add("button-detalles");
    botonDetalles.textContent = "Ver detalles";
    botonDetalles.addEventListener("click", () => {
     
      mostrarDetallesProductos(producto.id);
      // mostrarDetallesProductos(producto);
    });

    cardItem.appendChild(botonDetalles);

    cardProductos.appendChild(cardItem);
  });
}

function mostrarDetallesProductos(productoId) {
  window.location.href = `productos.html?id=${productoId}`;
}