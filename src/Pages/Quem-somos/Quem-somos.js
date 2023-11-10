// import logo from './logo.svg';

import prisma from './imag/imagSVG/light-prisma.svg';
import css from './imag/imagSVG/css3.svg';
import mysql from './imag/imagSVG/MySQL-Dark.svg';

function QuemSomos() {
  return (
   
      <section className=' sm:w-screen sm:h-[100vh] w-screen h-screen	 z-0 flex 
      justify-center  bg-quem-pattern   bg-no-repeat bg-cover items-center' id='quem-somos'>
        <div className="sm:w-screen sm:h-[100vh] w-screen h-screen flex-col	backdrop-brightness-[0.4] z-10 flex justify-center items-center bg-none">
    <h2 className="sm:pr-4 sm:pb-0 sm:pl-4 sm:text-4xl flex  justify-center items-start font-sans text-zinc-50 pr-16 pl-12 pb-10 sm:mb-[2rem] sm:-mt-[4rem]  pt-20 text-7xl">QUEM SOMOS</h2>
    <p className=" sm:text-lg sm:pt-1 sm:pr-4 sm:pb-6 sm:pl-4  flex justify-center items-start text-justify text-2xl pr-20 pl-20 pb-16  pt-10 text-zinc-50">Sou Felipe Dias, desenvolvedor Full-Stack Júnior.
     Este projeto integrador tem o objetivo de proporcionar praticidade e estreitar a relação entre cliente e empresa,
     facilitando o acesso às informações. A praticidade é evidente na navegação pelas páginas, no processo de cadastro 
     e no acesso à página do usuário. Nela, o cliente pode solicitar atendimento e visualizar uma lista de agendamentos 
     feitos por ele.
     O projeto utiliza a excelente tecnologia React JS, uma biblioteca JavaScript para criar interfaces de usuário,
     juntamente com uma eficiente API Node JS. A principal habilidade aplicada neste projeto é o React JS, com seus recursos 
     que seguem o padrão Single Page Applications no Front-End. No Back-End, foram empregadas as tecnologias Node.js, Express.js
      e a ORM Prisma, seguindo o padrão MVC (Model-View-Controller). </p>
 
  
</div>
    </section >

   
   
  );
}

export default QuemSomos;