import React, { useState } from 'react';

const HOST_API = "http://localhost:8080";

const AddProveedor = () => {

    const [nombre, setNombre] = useState();
    const [celular, setCelular] = useState();
    const [cedula, setCedula] = useState();

    const datosValidados = () => {
        if(nombre !== undefined && celular !== undefined && cedula !== undefined){
            return true;
        }
        return false;
    }

    const agregarProveedor = (event) => {
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

            fetch(HOST_API + "/Proveedor", requestOptions)
            .then(response => response.json())
            .then((proveedor) => {
                console.log(proveedor);
            });
        }
        event.target.reset();
    }

    return(
        <>
        <h3>Agregar Proveedor</h3>
        <div>
            <form onSubmit={agregarProveedor}>
                <label>Ingrese Nombre</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Nombre' onChange={ event => {setNombre(event.target.value)}}></input>

                <label placeholder='Ingrese Celular'>Ingrese Celular</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Nombre' onChange={ event => {setCelular(event.target.value)}}></input>
            
                <label placeholder='Ingrese Cedula'>Ingrese una Cedual</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Nombre' onChange={ event => {setCedula(event.target.value)}}></input>
            
                <button type='submit' className='btn btn-warning'>Crear Proveedor</button> 
            </form>
        </div>
        </>
    )
}

export default AddProveedor;