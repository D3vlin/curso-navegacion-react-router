import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const routes = []
routes.push({ to: '/', text: 'Home' })
routes.push({ to: '/blog', text: 'Blog' })
routes.push({ to: '/profile', text: 'Profile' })
routes.push({ to: '/login', text: 'Login' })
routes.push({ to: '/logout', text: 'Logout' })

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <Link to={route.to}>{route.text}</Link>
                    </li>
                ))}
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            to={route.to}
                            className={({ isActive }) => ''}
                            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export { Menu }