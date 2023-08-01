import logo from './logosvejasssdeussss.png';
import React from 'react';
import { Link  } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    
      <header className='header' >

            <img    className='logo' src={logo}  alt='locomarca'/>
            <p className='logo-nome'>Strait</p>
            <nav className='nav'>
           
              <ul className='menu' role="menu">
                <li className='efect'><Link to="/home">Home</Link></li>
                <li className='efect'><Link to="/servicos">Serviços</Link></li>
                <li className='efect'><Link to="/quemsomos" >Quem Somos</Link></li>
                <li className='efect'><Link to="/galeria">Galeria</Link></li>
                <li className='efect'><Link to="/planos">Plano Parceria</Link></li>
                <li><Link to="/cadastros"><button className='cadastro'  >Cadastre-se</button></Link></li>
               <li><Link to="/login" ><button class="Btn"><div class="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div><div class="text">Login</div>
</button></Link></li>  
                
              </ul>
            </nav>
          </header>
          
    
  );
}

export default Menu;