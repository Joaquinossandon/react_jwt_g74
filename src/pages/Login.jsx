import { useState } from "react"
import useAuth from "../hooks/useAuth"

function Registro() {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: ''
    })
    const { login } = useAuth()

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async (event) => {
        event.preventDefault()
        await login(formInfo)
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
                <button onClick={handleClick}>Registrarse</button>
            </form>
        </div>
    )
}

export default Registro