import React, { useState } from 'react';


const MostrarProductos = (props) => {

    const [cantidadDeProductos, setCantidadDeProductos] = useState();

    const addProducto = () => {

        let producto = {
            id: props.producto.productoId,
            nombre: props.producto.nombreProducto,
            precio: props.producto.precio,
            cantidad: cantidadDeProductos
        }

        props.setSelected(producto);
    }

    const actualizarCantidad = (event) => {
        if (parseInt(event.value, 10) <= parseInt(props.producto.cantidadDeProductos, 10) && parseInt(event.value, 10) > 0) {

            setCantidadDeProductos(event.value);


        } else if (event.value == "") {
            event.placeholder = "";
        }
        else {
            event.value = "";
            event.placeholder = "Sobrepasaste el stock";
        }
    }

    return (
        <>

            <label>
                Producto: {props.producto.nombreProducto}
            </label>

            <label>
                Precio:{props.producto.precio}
            </label>

            <label>
                Stock: {props.producto.cantidadDeProductos}
            </label>

            <input type="number" onChange={(event) => { actualizarCantidad(event.target) }}></input>
            <button onClick={addProducto}>🛒</button>

        </>
    );

}


export default MostrarProductos;