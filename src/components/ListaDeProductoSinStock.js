import React from 'react';

const ListaDeProductoSinStock = (props) => {


    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.producto.nombre}</td>
                        <td>{props.producto.precio}</td>
                        <td>{props.producto.cantidad}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );


}


export default ListaDeProductoSinStock;