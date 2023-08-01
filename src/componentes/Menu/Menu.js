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
               <li><Link to="/login" className='entrar'>Login<span class="container">
               <svg height="24" width="24" viewBox="0 0 24 24">
               <path d="M0 0h24v24H0z" fill="none"></path>
               <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
               </svg></span></Link></li>  
                
              </ul>
            </nav>
          </header>

         //<a class="swipe">Login <span class="container">
        // <svg height="24" width="24" viewBox="0 0 24 24">\\
        //  <path d="M0 0h24v24H0z" fill="none"></path>
//<path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
   //       </svg></span> </a>
          
    
  );
}

export default Menu;