import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokeList from "./pages/PokeList";
import Navbar from "./components/navbar";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import useAuth from "./hooks/useAuth";

function App() {
  const { token } = useAuth()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<PokeList />} />
        <Route path="/registro" element={token ? <Navigate to="/perfil" /> : <Registro />} />
        <Route path="/login" element={token ? <Navigate to="/perfil" /> : <Login />} />
        <Route path="/perfil" element={token ? <Perfil /> : <Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App
