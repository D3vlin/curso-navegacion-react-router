import React from 'react'
import { useAuth } from '../../Components/Auth'
import { Navigate } from 'react-router-dom'

function LoginPage() {
    const auth = useAuth()
    const [username, setUsername] = React.useState('')

    const login = (event) => {
        event.preventDefault()
        auth.login({ username })
    }

    if (auth.user) {
        return <Navigate to="/profile" />
    }

    return (
        <>
            <h1>LoginPage</h1>

            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario;</label>
                <input value={username} onChange={(event) => setUsername(event.target.value)} />
                <button type='submit'>Entrar</button>
            </form>
        </>
    )
}

export { LoginPage }