import React, { useState, useEffect } from 'react';
import ListaDeClientes from '../components/ListaDeClientes'

const HOST_API = "http://localhost:8080";

const GetClientes = () => {

    const [clientes,setCliente] = useState([]);

    useEffect(()=>{
        mostrarClientes();
       },[]);

       const mostrarClientes = ()=>{
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/clientes", request)
            .then(response => response.json())
            .then((clientes) => {
               
             setCliente(clientes);
            });
    }

    return ( 
    <> 
        {clientes.map(cliente => (
            <ListaDeClientes
            cliente={cliente}  
            />
        ))}
    </> );
}
 
export default GetClientes;