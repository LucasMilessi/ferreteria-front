import React from 'react';

const ListaDeClientes = (props) => {


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
                        <td>{props.cliente.nombre}</td>
                        <td>{props.cliente.celular}</td>
                        <td>{props.cliente.cedula}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );


}


export default ListaDeClientes;