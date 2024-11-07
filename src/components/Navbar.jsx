import { NavLink } from "react-router-dom"
import './Navbar.css'
import useAuth from "../hooks/useAuth"

function Navbar() {
    const { token, logout } = useAuth()
    return (

        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/lista">Lista Pokemones</NavLink>
                {!token ?
                    <>
                        <NavLink to="/registro">Registrate</NavLink>
                        <NavLink to="/Login">Inicia Sesion</NavLink>
                    </>
                    : <NavLink to="/perfil">perfil</NavLink>
                }


            </ul>
            {token &&
                <button onClick={logout}>Cerrar Sesion</button>
            }
        </nav>
    )
}

export default Navbar