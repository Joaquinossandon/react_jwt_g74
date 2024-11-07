import { useEffect, useState } from "react"

function useFetch(url, headers = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, { headers })
                const json = await res.json()
                setData(() => json)
                setError(null)
            } catch (error) {
                setError(() => error)
            } finally {
                setLoading(() => false)
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch