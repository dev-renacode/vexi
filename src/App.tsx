import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NavBar from "./components/Home/NavBar";
import Dashboard from "./pages/dashboard";
import Inicio from "./pages/Inicio";
import MisEmpresas from "./pages/MisEmpresas";
import EmpresaPerfil from "./pages/EmpresaPerfil";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* RUTA PADRE */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Inicio />} />
          <Route path="mis-empresas" element={<MisEmpresas />} />
          <Route path="empresa/:id" element={<EmpresaPerfil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
