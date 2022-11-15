import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import lupa from '../img/lupa.png'
import libro from '../img/libro-abierto.png'
import canasta from '../img/canasta.png'
const Footer = () => {
  return (
    <>
    <footer>
    <aside className='footer'>
    <div className='transparente'></div>
    <div className='transparente2'></div>
    <div className='transparente3'></div>
    <Link to='/home' className='links'> <img src={libro} className='iconos'/>Home</Link>
<div className='transparente4'> <img src={canasta} className='iconos '/> </div>
    <Link to='/buscar' className='links'> <img src={lupa} className='iconos'/> <p>Buscar </p></Link>
    </aside>
    </footer>
    <Outlet/>
    </>
  )
}

export default Footer