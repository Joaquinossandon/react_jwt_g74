import { useContext } from "react"
import { userContext } from "../context/UserContext"

function useAuth() {
    return useContext(userContext)
}

export default useAuth