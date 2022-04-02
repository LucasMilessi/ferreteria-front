import React, { useState, useEffect } from 'react';
import ListaDeProductoSinStock from '../components/ListaDeProductoSinStock'

const HOST_API = "http://localhost:8080";

const GetProductosSinStock = () => {

    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        mostrarProductos();
       },[]);

       const mostrarProductos = ()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/Productos", requestOptions)
            .then(response => response.json())
            .then((productos) => {
               
             sinStock(productos);
            });
    }

    const sinStock = (productos)=>{

        let prodSinStock = [];
        productos.map((producto)=>{
            if(producto.cantidad == 0){
                prodSinStock.push(producto);
            }
        });

        setProductos(prodSinStock);

    }
    
    return ( 
    <> 
        {productos.map(producto => (
            <ListaDeProductoSinStock
            producto={producto}  
            />
        ))}
    </> );
}
 
export default GetProductosSinStock;