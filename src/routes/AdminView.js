import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import AddClientes from "../containers/pages/AddClientes"
import AddProveedor from "../containers/pages/AddProveedor";
import AddProducto from "../containers/pages/AddProducto";


function AdminView() {
  return(
    <>
     <h1>Hola, admin</h1>
  <div>
  <BrowserRouter>
    <div>
      <li>
      <Link to="/AgregarCliente">Inscribir Cliente</Link>
      </li>

      <li>
      <Link to="/AgregarProveedor">Inscribir Proveedor</Link>
      </li>

      <li>
      <Link to="/AgregarProducto">Productos</Link>
      </li>
      
    </div>
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
