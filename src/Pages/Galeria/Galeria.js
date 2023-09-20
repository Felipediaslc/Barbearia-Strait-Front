 import './Galeria.css';
 import { Carousel } from 'react-responsive-carousel';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from './imag/imagenserv.jpeg'
import foto2 from './imag/fund33.jpg'
import foto3 from './imag/fund09.jpg'
import foto4 from './imag/fund07.jpg'
import foto5 from './imag/mage01.jpg'
import foto6 from './imag/cliente-de-preparação-barbeiro-profissional-para-corte-cabelo-na-barbearia-moda-do-estilo-autocuidado-da-beleza-e-masculina-231458926.jpg'

function Galeria() {
  return (
    <section className='galeria' id='galeria'>
    <h2 className="titulo-gal" >GALERIA</h2>
    
    <Carousel  className= "galery-barb">
                <div>
                    <img src={foto1} alt=''  />
                    
                </div>
                <div>
                   <img src={foto2} alt=''   />
                    
                </div>
                <div>
                    <img src={foto3} alt=''  />
                   
                </div>
                <div>
                    <img src={foto4} alt=''   />
                   
                </div>
                <div>
                    <img src={foto5} alt=''   />
                   
                </div>
                <div>
                    <img src={foto6} alt=''  />
                    
                </div>
            </Carousel>


  </section>
    

  );
}

export default  Galeria;