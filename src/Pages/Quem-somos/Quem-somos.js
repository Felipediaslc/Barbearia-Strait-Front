// import logo from './logo.svg';
import './Quem-somos.css';
import prisma from './imag/imagSVG/light-prisma.svg';
import css from './imag/imagSVG/css3.svg';
import mysql from './imag/imagSVG/MySQL-Dark.svg';

function QuemSomos() {
  return (
   
      <section className='quem-somos' id='quem-somos'>
    <h2 >QUEM SOMOS</h2>
    <p>Sou Felipe Dias, desenvolvedor Full-Stack Júnior. E esse projeto intgrador, 
         tem o objetivo de dar praticidade ,estreitar a relação entre cliente - empresa  
          e acesso as informações.  A praticidade de navegar pelas pages, se cadastrar, 
          acessar a page usuário, onde o clinte pode solicitar o seu atendimento e uma listar de
          agendamento feitos por ele. Esse projeto tem uma otima tecnologia que é React JS,   
          uma biblioteca JavaScript para criar interfaces de usuárioe e uma boa Api Node JS.
          A skill usada nesse projeto é o Rect js com seus recursos que seguem o padrão
          Single Page Applications no Front-End. No Back-End as tecnologias foram Node.js,
           Express.js, a Orm Prisma, seguindo o padrão MVC (MODEL VIEW CONTROLLER) </p>
    
       <div className="body-part-2">
       <div className="hoodie-guy"></div>
      
   
</div>
  

    </section >

   
   
  );
}

export default QuemSomos;