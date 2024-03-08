$(document).ready(function() {

    const carrito = [];
    const listaProductos = [];

    const apiproductos = "https://api.escuelajs.co/api/v1/products";
    const listaproductosHTML = document.getElementById("listaproductos");
    const carritoHTML = document.getElementById("listaCarrito");
    const contadorProductos = [10];

    fetch(apiproductos)
        .then(respuesta => respuesta.json())
        .then((datos) => {
            mostrarProductos(datos.slice(0, 6));
            rellenarListaProductos(datos);
        })
        .catch(error => console.log(error));

    function rellenarListaProductos(datos){
        datos.forEach(producto => {
            listaProductos.push(producto);
        });
    }

    function mostrarProductos(lista) {
        lista.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.title} - $${producto.price}`;
            const boton = document.createElement("button");
            boton.textContent = "Comprar";
            boton.addEventListener("click", function() {
                agregarAlCarrito(producto);
                calcularTotal();
            });
            li.appendChild(boton);
            const imagen = document.createElement("img");
            imagen.src  = "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668861-clothes-fashion-outfit-tshirt_108013.png";//pego link de imagen porque no pude hacer funcionar las imagenes de la API
            li.appendChild(imagen);

            listaproductosHTML.appendChild(li);
        });
    }

    function productoEstaEnCarrito(carrito, producto){
        var res = false;
        carrito.forEach(item => {
            if(item == producto){
                res= true;
            }
        })
        return res;
    }
    
    function agregarAlCarrito(producto) {
        if(!productoEstaEnCarrito(carrito, producto)){
            carrito.push(producto);
        }

            if (contadorProductos[producto.id]) {
                contadorProductos[producto.id]++;
            } else {
                contadorProductos[producto.id] = 1;
            }

        mostrarCarrito();
    }

    function mostrarCarrito() {
        carritoHTML.innerHTML = "";

        carrito.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.title} - $${producto.price} - ${contadorProductos[producto.id]}`;
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", function() {
                eliminarProducto(producto);
            });
            li.appendChild(botonEliminar);
            carritoHTML.appendChild(li);
        });

        }

    
    function eliminarProducto(producto) {
        const index = carrito.indexOf(producto);
        if (index > -1) {
            carrito.splice(index, 1);
            mostrarCarrito();
            calcularTotal();
        }
    }

    function vaciarCarrito() {
        carrito.splice(0, carrito.length);
        mostrarCarrito();
        calcularTotal();
    }

    function calcularTotal() {
        let subtotal = 0;

        carrito.forEach(producto => {
            subtotal += producto.price * contadorProductos[producto.id];
        });


        document.getElementById("totalCarrito").textContent = subtotal.toFixed(2);

    }

    const botonEliminarTodo = document.getElementById("eliminarTodo");
    botonEliminarTodo.addEventListener("click", function() {
        vaciarCarrito();
    });


});

