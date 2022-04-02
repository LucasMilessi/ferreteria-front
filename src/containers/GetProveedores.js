import React, { useState, useEffect } from 'react';
import ListaDeProveedores from '../components/ListaDeProveedores'

const HOST_API = "http://localhost:8080";

const GetProveedor = () => {

    const [proveedores,setProveedores] = useState([]);

    useEffect(()=>{
        mostrarProveedores();
       },[]);

       const mostrarProveedores = ()=>{
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/Proveedores", request)
            .then(response => response.json())
            .then((proveedores) => {
               
                setProveedores(proveedores);
            });
    }

    return ( 
    <> 
        {proveedores.map(proveedor => (
            <ListaDeProveedores
            proveedor={proveedor}  
            />
        ))}
    </> );
}
 
export default GetProveedor;