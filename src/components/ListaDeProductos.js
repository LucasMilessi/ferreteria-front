import React, { useEffect, useState } from 'react';
import AgregarProductosACarro from './AgregarProductosACarro';

const HOST_API = "http://localhost:8080";

const ListaDeProductos = () => {

    const [productos, setProductos] = useState([]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [clientes, setClientes] = useState([]);
    const [clienteSeleccionado, setClienteSeleccionado] = useState();


    useEffect(() => {
        precioFinal();
    }, [productosSeleccionados]);

    useEffect(() => {
        mostrarClientes();
        mostrarProductos();
        
    }, []);

    const mostrarClientes = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/clientes", requestOptions)
            .then(response => response.json())
            .then((clientes) => {
                setClientes(clientes);
            });
    }

    const mostrarProductos = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/Productos", requestOptions)
            .then(response => response.json())
            .then((productos) => {

                setProductos(productos);
            });
    }

    const AddProdutoSeleccionado = (valorProducto) => {

        let producto = productosSeleccionados.find(producto => producto.productoId == valorProducto.productoId);

        if (producto == undefined) { //Si el producto seleccionado no se encuentra en la lista ya seleccionada, se agrega
            setProductosSeleccionados(productosSeleccionados => [...productosSeleccionados, valorProducto]);

        } else { //Si el producto se encuentra ya seleccionado, se selecciona nuevamente la cantidad deceada y se actualiza 

            let index = productosSeleccionados.findIndex(p => p.productoId === valorProducto.productoId);

            productosSeleccionados.splice(index, 1);

            productosSeleccionados.push(valorProducto);
            setProductosSeleccionados(productosSeleccionados => [...productosSeleccionados]);

        }
    }

    const precioFinal = () => {
        let valorFinal = 0;
        productosSeleccionados.map((productoSeleccionado) => {
            valorFinal += productoSeleccionado.cantidad * productoSeleccionado.precio;
        })
        setPrecioTotal(valorFinal);
        }

    const elegirCliente = (valorCliente) => {
        let cliente = clientes.find(cliente => cliente.productoId == valorCliente);

        setClienteSeleccionado(cliente);
    }

    const descontarStock = (productosComprados) => {

        productosComprados.map((productoComprado) => {
            let BuscarIdProducto = productos.findIndex(p => p.productoId === productoComprado.productoId);
            let producto = {
                "nombre": productos[BuscarIdProducto].nombreProducto,
                "cantidad": productos[BuscarIdProducto].cantidad - productoComprado.cantidad,
                "precio": productos[BuscarIdProducto].precio,
                "proveedor": productos[BuscarIdProducto].proveedor
            }
            const request = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            };

                fetch(HOST_API + "/producto/" + productos[BuscarIdProducto].productoId, request)
                    .then(response => response.json())
                    .then((producto) => {
                        console.log(producto);
                        mostrarProductos();
                });
        });
    }

    const addFacturaCliente = (event) => {
        event.preventDefault();

        const fecha = Date.now();
        const fechaDeHoy = new Date(fecha);

        let datosDeFactura = {
            fecha: fechaDeHoy,
            nombreCliente: clienteSeleccionado,
            atencionCliente: "Raul",
            productosPagos: productosSeleccionados,
            totalPago: precioTotal
        }

            console.log(JSON.stringify(datosDeFactura));
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosDeFactura)
            };

            fetch(HOST_API + "/factura", requestOptions)
                .then(response => response.json())
                .then((factura) => {
                console.log(factura);
                descontarStock(factura.productosPagos)
                });
            event.target.reset();
    }

    return (<div>

        <table className='table'>
            {
                productos.map(producto => (
                    <tr>
                        <td>
                            <AgregarProductosACarro
                                producto={producto}
                                setSelected={AddProdutoSeleccionado}
                            />
                        </td>
                    </tr>
                ))
            }
        </table>

        <div>
            <h1>Productos Seleccionados para comprar</h1>

            <table className='table'>
                {
                    productosSeleccionados.map(productoSelect => (
                        <>
                            <tr>
                                <td>Producto</td>
                                <td>{productoSelect.nombreProducto}</td>
                            </tr>
                            <tr>
                                <td>Cantidad</td>
                                <td>{productoSelect.cantidad}</td>
                            </tr>
                            <tr>
                                <td>Precio</td>
                                <td>{productoSelect.cantidad * productoSelect.precio}</td>
                            </tr>
                        </>
                    ))
                }
                <tr>
                    <td>Precio total</td>
                    <td>{precioFinal}</td>
                </tr>
            </table>
            <form className='form' onSubmit={addFacturaCliente}>
                <h3>Cedula</h3>
                <select onChange={event => { elegirCliente(event.target.value) }}>
                    {clientes.map(cliente => (
                        <option key={cliente.id} value={cliente.id}>{cliente.documentoID}</option>
                    ))}
                </select>
                <input type="submit" value="Finalizar Compra"></input>
            </form>
        </div>
    </div>

    )

} 

export default ListaDeProductos;