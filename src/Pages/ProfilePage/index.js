import React from 'react'
import { useAuth } from '../../Components/Auth'

function ProfilePage() {
    const auth = useAuth()

    return (
        <>
            <h1>Perfil</h1>
            <h1>Bienvenido, {auth.user.username}</h1>
        </>
    )
}

export { ProfilePage }