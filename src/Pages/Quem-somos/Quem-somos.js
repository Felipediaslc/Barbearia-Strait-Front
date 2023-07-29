// import logo from './logo.svg';
import './Quem-somos.css';
import prisma from './imag/imagSVG/light-prisma.svg';
import css from './imag/imagSVG/css3.svg';
import mysql from './imag/imagSVG/MySQL-Dark.svg';

function QuemSomos() {
  return (
   
      <section className='quem-somos' id='quem-somos'>
    <p  >QUEM SOMOS</p>
    <pre>Sou Felipe Dias, desenvolvedor Full-Stack Júnior.<br />
         E esse projeto intgrador,tem o objetivo de dar praticidade , <br />
         estreitar a relação entre cliente - empresa e acesso as informações. <br />
         A praticidade de navegar pelas pages, se cadastrar, <br />
         acessar a page usuário, onde o clinte pode solicitar  <br />
         o seu atendimento e uma listar de agendamento feitos por ele.<br />
         Esse projeto tem uma otima tecnologia que é React JS,   <br />
         uma biblioteca JavaScript para criar interfaces de usuários <br />
         e uma boa Api Node JS. A skill usada nesse projeto é o Rect js<br />
         com seus recursos que seguem o padrão  Single Page Applications no Front-End.<br />
         No Back-End as tecnologias foram Node.js,Express.js, <br />
         a Orm Prisma, seguindo o padrão MVC (MODEL VIEW CONTROLLER) <br /> </pre>
    
       <div class="body-part-2">
       <div class="hoodie-guy"></div>
       <div class="circle">
                  <span style="--i:1;"><img src={prisma} alt='' height="75px" /></span>
                  <span style="--i:2;"><img src={css} alt='' height="70px" /></span>
                  <span style="--i:3;"><img src={mysql} alt='' height="75px" /></span>
                   
                    
                </div>
   
</div>
  

    </section >

   
   
  );
}

export default QuemSomos;