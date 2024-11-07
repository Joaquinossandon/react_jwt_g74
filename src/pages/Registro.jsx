import { useState } from "react"

function Registro() {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async (event) => {
        event.preventDefault()

        const res = await fetch('https://poke-jwt.vercel.app/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })

        const data = await res.json()
        console.log(data)
    }

    return (
        <div>
            <h1>Registro</h1>
            <form>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
                <button onClick={handleClick}>Registrarse</button>
            </form>
        </div>
    )
}

export default Registro