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
               <li><Link to="/login" ><button className='entrar'  >Log-in<i className="fa fa-sign-in" aria-hidden="true"></i></button></Link></li>  
                
              </ul>
            </nav>
          </header>
          
    
  );
}

export default Menu;