import React from 'react'
import { useAuth } from '../../Components/Auth'

function LogoutPage() {
    const auth = useAuth()

    const logout = (event) => {
        event.preventDefault()
        auth.logout()
    }

    return (
        <>
            <h1>LogoutPage</h1>

            <form onSubmit={logout}>
                <label>Seguro de salir?</label>
                <button type='submit'>Salir</button>
            </form>
        </>
    )
}

export { LogoutPage }