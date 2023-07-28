// import logo from './logo.svg';
import './Quem-somos.css';
import prisma from './imag/imagSVG/light-prisma.svg';

function QuemSomos() {
  return (
    <> 
      <section className='quem-somos' id='quem-somos'>
    <p  >QUEM SOMOS</p>
    <pre>Sou Felipe Dias, desenvolvedor Full-Stack Júnior. E esse projeto intgrador, <br />
         tem o objetivo de dar praticidade ,estreitar a relação entre cliente - empresa  <br />
          e acesso as informações.  A praticidade de navegar pelas pages, se cadastrar, <br />
          acessar a page usuário, onde o clinte pode solicitar o seu atendimento e uma listar de<br />
          agendamento feitos por ele. Esse projeto tem uma otima tecnologia que é React JS,   <br />
          uma biblioteca JavaScript para criar interfaces de usuárioe e uma boa Api Node JS.<br />
          A skill usada nesse projeto é o Rect js com seus recursos que seguem o padrão<br />
          Single Page Applications no Front-End. No Back-End as tecnologias foram Node.js,<br />
           Express.js, a Orm Prisma, seguindo o padrão MVC (MODEL VIEW CONTROLLER) <br /> </pre>
    </section >
    <section id="content-body">
   
   <div class="body-part-2">
       <div class="hoodie-guy-animation-class">
           <div class="hoodie-guy"></div>
           <div class="circle">
           <span style="--i:1;"><img src={prisma} alt='' height="75px"/></span>
             <span style="--i:1;"><img src="assets/SVGIcons/light-prisma.svg" height="75px"></span>
              
               <span style="--i:2;"><img src="assets/SVGIcons/html-5.svg" height="70px"></span>
               <span style="--i:3;"><img src="assets/SVGIcons/figma.svg" height="75px"></span>
               <span style="--i:4;"><img src="assets/SVGIcons/css3.svg" height="70px"></span>
               <span style="--i:5;"><img src="assets/SVGIcons/javascript.svg" height="75px"></span>
               <span style="--i:5;"><img src="assets/SVGIcons/expressjs-ar21.png" height="70px"></span>
               <span style="--i:7;"><img src="assets/SVGIcons/react-1.svg" height="75px"></span>
               <span style="--i:8;"><img src="assets/SVGIcons/MySQL-Dark.svg" height="70px"></span>
               <span style="--i:9;"><img src="assets/SVGIcons/Firebase-Dark.svg" height="70px"></span>
               <span style="--i:10;"><img src="assets/SVGIcons/Github-Dark.svg" height="75px"></span>
               <span style="--i:11;"><img src="assets/SVGIcons/Mongo-db-logo.png" height="60px"></span>
               <span style="--i:13;"><img src="assets/SVGIcons/nodejs_logo.png" height="75px"></span>
               <span style="--i:14;"><img src="assets/SVGIcons/jsjpg.jpg" height="75px"></span>
           </div>
       </div>
       <div class="background-circle"></div>
   </div>
</section>
    </>
  );
}

export default QuemSomos;