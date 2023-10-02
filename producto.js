document.addEventListener("DOMContentLoaded",() => {

  const detalleProducto = document.getElementById("detalle-producto");
  
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto= urlParams.get("id");
  
  
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  
  const productoSeleccionado = datosProductos.find((producto) => producto.id == idProducto);
  // const productoSeleccionado = datosProductos.productos.find((producto) => producto.id == idProducto);
  
  if (productoSeleccionado){
  
      const contenedorDetalleProducto = document.createElement("div");
      contenedorDetalleProducto.classList.add("detalle-producto");
      contenedorDetalleProducto.innerHTML=
         `<h4>${productoSeleccionado.nombre}</h4>
          <img src="${productoSeleccionado.imagenes[0,1]}" class="img-card-item">
          <strong><p>Material:</strong>${productoSeleccionado.material}</p>
          <strong><p>Altura:</strong>${productoSeleccionado.altura}cm</p>
          <strong><p>Altura:</strong>${productoSeleccionado.altura}cm</p>
          <strong><p>Diámetro:</strong>${productoSeleccionado.diametro}cm</p>
          <strong><p>Precio:</strong> $${productoSeleccionado.precio}00</p>
          <strong><p>Descripcion:</strong>${productoSeleccionado.description}</p> `;
  
      detalleProducto.appendChild(contenedorDetalleProducto);
    }
  
  });
  