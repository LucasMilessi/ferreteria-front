import React, { useState, useEffect } from 'react'

const HOST_API = "http://localhost:8080";

const AddProducto = () => {

    const [nombreProducto, setNombreProducto] = useState();
    const [cantidad, setCantidad] = useState();
    const [precio, setPrecio] = useState();
    const [proveedor, setProveedor] = useState();
    const [proveedores, setProveedores] = useState([]);

    const datosValidados = () => {
        if (nombreProducto !== undefined && precio !== undefined && cantidad !== undefined) {
            return true;
        }
        return false;
    }

    const AgregarProducto = (event) => {
        event.preventDefault();

        let prov = proveedores.find(proveedorNuevo => proveedorNuevo.id == proveedor);

        if (datosValidados) {

            let request = {
                nombre : nombreProducto,
                precio : precio,
                cantidad : cantidad,
                proveedor: prov
            }

            const request2 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(HOST_API + "/Producto", request2)
                .then(response => response.json())
                .then((producto) => {
                    console.log(producto);
                });

        }
        event.target.reset();
    }

    useEffect(() => {
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/Proveedores", request)
            .then(response => response.json())
            .then((proveedores) => {
                setProveedores(proveedores);
                setProveedor(proveedores[0].id);
            });
    }, []);

    

    return (
        <>
            <h1>Agregar Productos</h1>
            <form onSubmit={AgregarProducto}>
                
                <label>Producto</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Nombre del Producto' onChange={event => { setNombreProducto(event.target.value) }}></input>

                <label>Precio</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Precio' onChange={event => { setPrecio(event.target.value) }}></input>

                <label>Cantidad</label>
                <input class="form-control form-control-sm" placeholder='Ingrese Cantidad' onChange={event => { setCantidad(event.target.value) }}></input>

                <label>Proveedor: </label>
                <select className='m-2 text-white-50 bg-dark' onChange={event => { setProveedor(event.target.value) }}>
                    {proveedores.map(proveedor => (
                        <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
                    ))}
                </select>
                <button className='btn btn-warning m-2' type='submit'>Registrar Producto ???</button>
            </form>
        </>
    )

}

export default AddProducto;