
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
    <section className='sm:w-screen sm:h-[100vh] sm:px-0  w-screen h-screen bg-logo-galeria   bg-no-repeat bg-cover' id='galeria'>
       <div className=' sm:w-screen sm:h-[100vh] sm:px-0   w-screen h-screen	 backdrop-brightness-[0.6] flex 
      justify-star items-center z-20  flex-col bg-none'>
    <h2 className="text-white z-30 flex justify-center items-start pt-20 pr-0 pb-0 mr-0    text-[3.5rem]  font-sans " >GALERIA</h2>
    
    <Carousel  className= "  -mt-[0.5rem] mr-0 mb-[0.2rem] ml-[0.2rem] sm:ml-0  sm:w-[97vw] w-[39vw] opacity-[1000] z-50">
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
            </div>
            
  </section>
    

  );
}

export default  Galeria;