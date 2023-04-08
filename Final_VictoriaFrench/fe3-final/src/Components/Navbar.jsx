import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';



const Navbar = () => {

  return (
    <nav className="nav">
      <img src="/images/DH.png" alt='DH-logo'/>
      <div className="nav_div">
        <ul className='nav-ul'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/favs">Favoritos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        <ThemeToggleButton/>
      </div>
    </nav>
  )
}

export default Navbar