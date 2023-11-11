// import logo from './logo.svg';



import foto from './imag/logs01.png'



const Homee = () => {
  return (
    <>
    <section  className="sm:w-[screen] sm:h-[100vh] w-screen h-screen	 z-10 flex 
      justify-start  bg-corp-pattern   flex-col flex-wrap bg-no-repeat bg-cover items-center"   id='home' >
    <div className=' sm:w-screen sm:h-[100vh] w-screen h-screen	 backdrop-brightness-[0.4] flex 
      justify-star items-center z-20  flex-col bg-none'>

    <p className='sm:text-[1.5rem] sm:h-[20vh] sm:w-[85vw] sm:p-0 sm:bg-none sm:mt-[6rem] sm:ml-[2.2rem] sm:mr-[3.2rem]sm:flex sm:justify-center 
    flex z-40  justify-start items-start pt-24 pr-72 pb-0 pl-0 -mb-1 -ml-96 w-[63vw]  text-white   font-sans text-[2.7rem]' >SEU CABELO E BARBA MOLDURAM SEU ROSTO, <br />
   CUIDE BEM DELES E APAREÇA!</p>

  <div className='sm:w-[55vw] sm:h-[55vh] sm:pr-[0.8rem] w-[15vw] h-[25vh] opacity-100 sm:-mb-[3.5rem]
  flex justify-center items-center  -mb-7 pt-28 pr-0 pb-0 pl-0 ]'>
  <img  src={foto}  alt='locomarca'/>
  </div>
   
 
    <p className=' sm:flex sm:justify-end   sm:pr-3 flex justify-center items-center text-white 
      font-sans text-[1.5rem] sm:pt-0 sm:-mt-[0.2rem] pt-28 pr-0 pb-0 pl-0 '>BORA AGENDAR SEU HORÁRIO?</p>
    </div>
</section>






<div  className="sm:w-screen sm:px-0 sm:h-[190vh] sm:flex sm:flex-col sm:justify-center sm:items-baseline w-screen h-screen z-0 flex justify-center  bg-logo-servico   bg-no-repeat bg-cover items-center"  >
        
        <div className="sm:w-screen sm:h-[190vh] sm:flex sm:flex-col sm:justify-center sm:items-baseline w-screen h-screen backdrop-brightness-[0.7]	z-10 flex  flex-col  justify-center items-center bg-none">
       
        <h2 className="  sm:flex sm:justify-center sm:items-start sm:pl-[12rem] sm:pr-0 sm:-mt-[3.5rem]
        flex justify-center items-start  pt-0 pr-0 pb-0 pl-12 w-[50vw]
        mt-[1rem] mr-7 -mb-2 -ml-4 font-sans text-white text-[3.5rem] sm:text-[3.5rem]">SERVIÇOS</h2>
    
         <div className=" sm:pl-[2.7rem] sm:pr-0 sm:-mb-[7rem] sm:flex sm:flex-col sm:justify-center 
         sm:items-baseline flex justify-center items-center mt-5 text-white ">
    
        
        <div className="sm:w-[70vw] sm:h-[45vh] w-[25vw] h-[55vh] sm:mb-[2rem]
         pt-4 pr-0 pb-0 pl-0 mx-4 text-center  backdrop-blur-sm bg-black/50
        rounded-lg border border-transparent shadow shadow-amarelo/80
          ">
            <div className="pt-2 pr-4 pb-2 pl-4">
                <h2 className="text-4xl pb-4 text-amarelo font-bold font-saira  sm:text-[1.7rem]">Cabelo</h2>
                <p className="sm:text-[1.3rem] text-amarelo text-2xl mb-4 font-saira border-b border-amarelo border-solid">Máquina</p>
                <p className="sm:text-[1.3rem] text-2xl -mb-4"><i className="sm:text-[1.3rem] sm:pr-1">R$</i><span className="sm:text-[1.5rem] text-5xl px-0 py-1">30</span>,00</p>
            </div>
            <div className="pt-2 pr-4 pb-2 pl-4" >
            
             <p className="sm:text-[1.3rem] text-amarelo text-2xl mb-4 font-saira border-b border-amarelo border-solid">Máquina + Tesoura</p>
             <p className=" sm:text-[1.3rem] text-2xl mb-4"><i className="sm:text-[1.3rem]  sm:pr-1" >R$</i><span className="sm:text-[1.5rem] text-5xl px-0 py-1">60</span>,00</p>
         </div>
            <div className="pt-2 pr-4 pb-2 pl-4" >
                <ul className="-mt-4 mx-8 -mb-4 sm:-mt-8 sm:mx-[0.3rem]">
                  <li className="list-none py-4 px-0 sm:tracking-[0.2rem]"><i className=" mr-1  text-amarelo fa fa-check-circle"></i>Lavagem de Cabelo</li>
                </ul>
           
            </div>
        </div>
    
        <div className="sm:w-[70vw] sm:h-[45vh] w-[25vw] h-[55vh] sm:mb-[2rem]
        pt-4 pr-0 pb-0 pl-0 mx-4 text-center backdrop-blur-sm bg-black/50
        rounded-lg border border-transparent shadow shadow-amarelo/80">
            <div className="pt-2 pr-4 pb-2 pl-4">
                <h2 className="text-4xl pb-4 text-amarelo font-bold font-saira sm:text-[1.7rem]">Barba</h2>
                <p className="sm:text-[1.3rem] text-2xl mb-4"><i className="sm:text-[1.3rem] sm:pr-1">R$</i><span className="sm:text-[1.5rem] text-5xl px-0 py-1">30</span>,00</p>
            </div>
            <div className="pt-4 pr-4 pb-2 pl-4">
                <ul className="-mt-2 mx-8 -mb-4" >
                    <li className="list-none py-4 px-2 sm:tracking-[0.2rem]" ><i className=" mr-1 text-amarelo fa fa-check-circle"></i>Corte</li>
                    <li className="list-none py-4 px-2 sm:tracking-[0.2rem]"><i className=" mr-1  text-amarelo    fa fa-check-circle"></i>Lavagem</li>
                    <li><i ></i></li>
                    <li><i ></i></li>
                    <li><i ></i></li>
                    <li><i></i></li>
                </ul>
                
            </div>
        </div>
        <div className="sm:w-[70vw] sm:h-[45vh] w-[25vw] h-[55vh] sm:mb-[2rem]
        pt-4 pr-0 pb-0 pl-0 mx-4 text-center backdrop-blur-sm bg-black/50
        rounded-lg border border-transparent shadow shadow-amarelo/80">
            <div className="pt-2 pr-4 pb-2 pl-4">
                <h2 className="text-4xl pb-4 text-amarelo font-bold font-saira sm:text-[1.7rem]">Sobrancelha</h2>
                <p className="sm:text-[1.3rem] text-2xl mb-4" ><i className="sm:text-[1.3rem] sm:pr-1" >R$</i><span className="sm:text-[1.5rem] text-5xl px-0 py-1">30</span>,00</p>
            </div>
            <div className="pt-4 pr-4 pb-2 pl-4">
                <ul className="-mt-2  mx-8 -mb-4">
                    <li className="list-none py-4 px-2 sm:tracking-[0.2rem]"><i className=" mr-1 text-amarelo fa fa-check-circle"></i>Reparos</li>
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
    </div>
<section className=' sm:w-screen sm:h-screen w-screen h-screen	 z-0 flex 
      justify-center  bg-quem-pattern   bg-no-repeat bg-cover items-center' id='quem-somos'>
        <div className="sm:w-screen sm:h-screen w-screen h-screen flex-col	backdrop-brightness-[0.4] z-10 flex justify-center items-center bg-none">
    <h2 className=" sm:pr-4 sm:pb-0 sm:pl-4 sm:text-4xl flex  justify-center items-start font-sans text-zinc-50 pr-16 pl-12 pb-10 sm:mb-[2rem] sm:-mt-[12rem]  pt-20 text-7xl">QUEM SOMOS</h2>
    <p className=" sm:text-lg sm:pt-2 sm:pr-4 sm:pb-0 sm:-mb-[7rem]  sm:pl-4  flex justify-center items-start text-justify text-2xl pr-20 pl-20 pb-16  pt-10 text-zinc-50">Sou Felipe Dias, desenvolvedor Full-Stack Júnior.
     Este projeto integrador tem o objetivo de proporcionar praticidade e estreitar a relação entre cliente e empresa,
     facilitando o acesso às informações. A praticidade é evidente na navegação pelas páginas, no processo de cadastro 
     e no acesso à página do usuário. Nela, o cliente pode solicitar atendimento e visualizar uma lista de agendamentos 
     feitos por ele.
     O projeto utiliza a excelente tecnologia React JS, uma biblioteca JavaScript para criar interfaces de usuário,
     juntamente com uma eficiente API Node JS. A principal habilidade aplicada neste projeto é o React JS, com seus recursos 
     que seguem o padrão Single Page Applications no Front-End. No Back-End, foram empregadas as tecnologias Node.js, Express.js
      e a ORM Prisma, seguindo o padrão MVC (Model-View-Controller).  </p>
 
  
</div>
    </section >
    </>
  );
}

export default Homee;