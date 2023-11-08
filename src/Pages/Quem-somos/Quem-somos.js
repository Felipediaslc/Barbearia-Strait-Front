// import logo from './logo.svg';

import prisma from './imag/imagSVG/light-prisma.svg';
import css from './imag/imagSVG/css3.svg';
import mysql from './imag/imagSVG/MySQL-Dark.svg';

function QuemSomos() {
  return (
   
      <section className=' sm:w-screen sm:h-[100vh] w-screen h-screen	 z-0 flex 
      justify-center  bg-quem-pattern   bg-no-repeat bg-cover items-center' id='quem-somos'>
        <div className="sm:w-screen sm:h-[100vh] w-screen h-screen flex-col	backdrop-brightness-[0.4] z-10 flex justify-center items-center bg-none">
    <h2 className="sm:pt-16 sm:pr-4 sm:pb-0 sm:pl-4 sm:text-4xl flex  justify-center items-start font-sans text-zinc-50 pr-16 pl-12 pb-10  pt-20 text-7xl">QUEM SOMOS</h2>
    <p className=" sm:text-lg sm:pt-1 sm:pr-4 sm:pb-6 sm:pl-4  flex justify-center items-start text-justify text-2xl pr-20 pl-20 pb-16  pt-10 text-zinc-50">Sou Felipe Dias, desenvolvedor Full-Stack Júnior. E esse projeto intgrador, 
         tem o objetivo de dar praticidade ,estreitar a relação entre cliente - empresa  
          e acesso as informações.  A praticidade de navegar pelas pages, se cadastrar, 
          acessar a page usuário, onde o clinte pode solicitar o seu atendimento e uma listar de
          agendamento feitos por ele. Esse projeto tem uma otima tecnologia que é React JS,   
          uma biblioteca JavaScript para criar interfaces de usuárioe e uma boa Api Node JS.
          A skill usada nesse projeto é o Rect js com seus recursos que seguem o padrão
          Single Page Applications no Front-End. No Back-End as tecnologias foram Node.js,
           Express.js, a Orm Prisma, seguindo o padrão MVC (MODEL VIEW CONTROLLER) </p>
 
  
</div>
    </section >

   
   
  );
}

export default QuemSomos;