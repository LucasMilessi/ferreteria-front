import React, { useState } from 'react';

const HOST_API = "http://localhost:8080";

const AddClientes = () => {

    const [nombre, setNombre] = useState();
    const [celular, setCelular] = useState();
    const [cedula, setCedula] = useState();

    const datosValidados = () => {
        if(nombre !== undefined && celular !== undefined && cedula !== undefined){
            return true;
        }
        return false;
    }

    const agregarCliente = (event) => {
        event.preventDefault();

        if(datosValidados){
            let request = {
                "nombre" : nombre,
                "celular" : celular,
                "cedula" : cedula
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(HOST_API + "/cliente", requestOptions)
            .then(response => response.json())
            .then((cliente) => {
                console.log(cliente);
            });
        }
        event.target.reset();
    }

    return(
        <>
        <h3>Agregar Cliente</h3>
        <div>
            <form onSubmit={agregarCliente}>
                <label>Ingrese Nombre</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Nombre' onChange={ event => {setNombre(event.target.value)}}></input>

                <label>Ingrese Celular</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Celular' onChange={ event => {setCelular(event.target.value)}}></input>
            
                <label>Ingrese una Cedual</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Cedula' onChange={ event => {setCedula(event.target.value)}}></input>
            
                <button type='submit' className='btn btn-warning'>Crear Cliente</button> 
            </form>
        </div>
        </>
    )
}

export default AddClientes