// import logo from './logo.svg';
import './Homee.css';
import '../Servicos/Servicos.css'
import '../Quem-somos/Quem-somos.css'
import foto from './imag/logs01.png'

const Homee = () => {
  return (
    <>
    <section  className='home'   id='home' >
     
    <p className='title-logs' >SEU CABELO E BARBA MOLDURAM SEU ROSTO,   <br />
   CUIDE BEM DELES E APAREÇA!</p> 
   <img  className='imagem-logo 'src={foto}  alt='locomarca'/>
    <p className='sub'>Bora agendar seu horário?</p>

</section>
<div  className="servicos" id='servicos'>
        <div className="titulo">Serviços</div>
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
    </section>
    </>
  );
}

export default Homee;