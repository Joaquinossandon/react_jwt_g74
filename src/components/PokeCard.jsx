import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function PokeCard({ poke }) {

    const { data: pokemon, loading, error } = useFetch(poke.url)

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Ocurrió un error: {error.message}</p>

    return (
        <div>
            <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
            <h2>{pokemon?.name}</h2>
        </div>
    )
}

export default PokeCard