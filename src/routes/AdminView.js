import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddClientes from "../containers/AddClientes"
import AddProveedor from "../containers/AddProveedor";
import AddProducto from "../containers/AddProducto";
import NewVenta from "../containers/NewVenta";
import GetProductosSinStock from "../containers/GetProductosSinStock";
import GetClientes from "../containers/GetClientes";
import GetProveedores from "../containers/GetProveedores"



function AdminView() {
  return (
    <>
      <div>
        <BrowserRouter>
          <table class="table table-dark m-2">
            <thead>
              <tr>
                <th scope="col">Altas 🔧</th>
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
                </tr>
            </tbody>
          </table>

          <table class="table table-dark m-2">
            <thead>
              <tr>
                <th scope="col">Venta 🔧</th>
              </tr>
              </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/Vender">Vender Herramientas 🛒</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table table-dark m-2">
            <thead>
              <tr>
                <th scope="col"> Sin Stock 🔧</th>
              </tr>
              </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/SinStock">Productos sin Stock 🏬</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table table-dark m-2">
            <thead>
              <tr>
                <th scope="col"> Ver Clientes 🔧</th>
              </tr>
              </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/clientes">Mis Clientes 👷🏽</Link>
                </td>
                <td>
                  <Link to="/proveedores">Mis Proveedores 🚚</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-dark"></table>
          <Routes>
            <Route path="/AgregarCliente" element={<AddClientes />} />
            <Route path="/AgregarProveedor" element={<AddProveedor />} />
            <Route path="/AgregarProducto" element={<AddProducto />} />
            <Route path="/AgregarProducto" element={<AddProducto />} />
            <Route path="/Vender" element={<NewVenta />} />
            <Route path="/SinStock" element={<GetProductosSinStock />} />
            <Route path="/clientes" element={<GetClientes />} />
            <Route path="/proveedores" element={<GetProveedores />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );

}
export default AdminView;
