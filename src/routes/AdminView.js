import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddClientes from "../containers/AddClientes"
import AddProveedor from "../containers/AddProveedor";
import AddProducto from "../containers/AddProducto";



function AdminView() {
  return (
    <>
      <h1>Hola RAÚL</h1>
      <div>
        <BrowserRouter>
          <table className="table table-dark">

            <thead>
              <tr>
                <th scope="col">Menú 🔧</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Link to="/AgregarCliente">Inscribir Cliente ➕</Link>
                </th>
                <td>
                  <Link to="/AgregarProveedor">Inscribir Proveedor ➕</Link>
                </td>
                <td>
                  <Link to="/AgregarProducto">Agregar Productos ➕</Link>
                </td>
                <td>
                  <Link to="/Vender">Vender Herramientas 🛒</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-dark"></table>
          <Routes>
            <Route path="/AgregarCliente" element={<AddClientes />} />
            <Route path="/AgregarProveedor" element={<AddProveedor />} />
            <Route path="/AgregarProducto" element={<AddProducto />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  );

}
export default AdminView;
