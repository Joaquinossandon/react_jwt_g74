import { createContext, useState } from "react"

export const userContext = createContext()

function UserProvider({ children }) {
    const [token, setToken] = useState('')
    const login = async (body) => {
        const res = await fetch('https://poke-jwt.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()
        setToken(data.token)
    }

    const logout = () => {
        setToken('')
    }

    return (
        <userContext.Provider value={{ token, login, logout }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider