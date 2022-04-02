import React, { useState } from 'react';


const MostrarProductos = (props) => {

    const [cantidadDeProductos, setCantidadDeProductos] = useState();

    const AgregarProducto = () => {

        let producto = {
            productoId: props.producto.productoId,
            nombreProducto: props.producto.nombreProducto,
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

            <label className='table table-dark m-2'>
                Producto: {props.producto.nombreProducto}
            </label>

            <label className='table table-dark m-2'>
                Precio:{props.producto.precio}
            </label>

            <label className='table table-dark m-2'>
                Stock: {props.producto.cantidad}
            </label>

            <input type="number" onChange={(event) => { actualizarCantidad(event.target) }}></input>
            <button className='text-white-50 bg-dark' onClick={AgregarProducto}>🛒</button>

        </>
    );

}


export default MostrarProductos;