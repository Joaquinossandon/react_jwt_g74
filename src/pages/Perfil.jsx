import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

function Perfil() {
    const { token } = useAuth()
    const { data: user, loading, error } = useFetch('https://poke-jwt.vercel.app/profile', {
        Authorization: `Bearer ${token}`
    })

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Ocurrió un error: {error.message}</p>

    return (
        <div>
            <h1>Perfil</h1>
            <p>{user.email}</p>
            <p>{JSON.stringify(user?.catched)}</p>
        </div>
    )
}

export default Perfil