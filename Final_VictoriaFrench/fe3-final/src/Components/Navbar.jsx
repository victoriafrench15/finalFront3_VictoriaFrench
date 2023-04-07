import React from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from "react";
// import { ContextGlobal } from "./utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className="nav">
      <img src="/images/DH.png" alt='DH-logo'/>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="nav_div">
        <ul className='nav-ul'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/favs">Favoritos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button >
          {/* Change Theme to {state.theme === "light" ? "Dark" : "Light"} */}
        </button>
      </div>
    </nav>
  )
}

export default Navbar