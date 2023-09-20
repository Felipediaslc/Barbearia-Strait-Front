// import logo from './logo.svg';
import './Homee.css';
import '../Servicos/Servicos.css'
import '../Quem-somos/Quem-somos.css'
import foto from './imag/logs01.png'


const Homee = () => {
  return (
    <>
    <section  className='home'   id='home' >
     
    <p className='title-logs' >SEU CABELO E BARBA MOLDURAM SEU ROSTO, <br />
   CUIDE BEM DELES E APAREÇA!</p> 
  <div className='imagem-logo '>
  <img  src={foto}  alt='locomarca'/>
  </div>
   
  
    <p className='sub'>BORA AGENDAR SEU HORÁRIO?</p>

</section>
<div  className="servicos" id='servicos'>
        <div className="titulo">SERVIÇOS</div>
    <div className="container">
    <div className="card">
        <div className="card-title">
            <h2>Cabelo</h2>
            <p id="cabelo-tit">Máquina</p>
            <p><i>R$</i><span>30</span>,00</p>
        </div>
        <div className="card-title" >
        
         <p id="cabelo-tit">Máquina + Tesoura</p>
         <p><i >R$</i><span>60</span>,00</p>
     </div>
        <div className="card-content" >
            <ul>
              <li><i className="fa fa-check-circle"></i>Lavagem de Cabelo</li>
            </ul>
       
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Barba</h2>
            <p><i>R$</i><span>30</span>,00</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Corte</li>
                <li><i className="fa fa-check-circle"></i>Lavagem</li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i></i></li>
            </ul>
            
        </div>
    </div>
    <div className="card">
        <div className="card-title">
            <h2>Sobrancelha</h2>
            <p ><i >R$</i><span>30</span>,00</p>
        </div>
        <div className="card-content">
            <ul>
                <li><i className="fa fa-check-circle"></i>Reparos</li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
                <li><i ></i></li>
            </ul>
           
        </div>
    </div>
</div>
</div>
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
    </section>
    </>
  );
}

export default Homee;