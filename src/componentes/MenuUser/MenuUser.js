import React from 'react';
import { Link  } from 'react-router-dom';
import logoUser from './../Menu/logosvejasssdeussss.png';
import './MenuUser.css'

const MenuUser = () => {
  return (
    <header className='header-user' >

    <img    className='logo-user' src={logoUser}  alt='locomarca'/>
    
    <nav className='nav-user'>
   
      <ul className='menu-user' role="menu">
        <li><Link to="/agenda">Agendar</Link></li>
        <li><Link to="/agendamentos">Agendamentos</Link></li>
        
        
      </ul>
      <div className="dropdown">
              <button className="dropbtn"><Link to="/"><i className="fa fa-sign-out"   aria-hidden="true"></i></Link></button>
            </div>
    </nav>
  </header>
  )
}

export default MenuUser
