import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Servicios</li>
            <li>Portfolio</li>
            <li>Contacto</li>
        </ul>
        <div className="nav-connect">Contactame</div>
    </div>
  )
}

export default Navbar