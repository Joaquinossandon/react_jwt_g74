import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import useFetch from "../hooks/useFetch";

function PokeList() {
    const { data, error, loading } = useFetch('https://pokeapi.co/api/v2/pokemon')

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Ocurrió un error: {error.message}</p>

    return (
        <>
            <h1>Lista pokemones</h1>
            {
                data.results.map(poke => (
                    <PokeCard key={poke.name} poke={poke} />
                ))
            }
        </>
    )
}

export default PokeList