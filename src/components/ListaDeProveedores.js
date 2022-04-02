import React from 'react';

const ListaDeProveedores = (props) => {


    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Cédula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.proveedor.nombre}</td>
                        <td>{props.proveedor.celular}</td>
                        <td>{props.proveedor.cedula}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );


}


export default ListaDeProveedores;