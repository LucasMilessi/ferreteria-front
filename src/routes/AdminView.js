import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import AddClientes from "../containers/pages/AddClientes"


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
    </div>
      <Routes>
      <Route path="/AgregarCliente" element={<AddClientes />} />
      </Routes>
  </BrowserRouter>
  </div>
    </>
  );

}
export default AdminView;
