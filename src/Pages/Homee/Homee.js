// import logo from './logo.svg';



import foto from './imag/logs01.png'



const Homee = () => {
  return (
    <>
    <section  className='sm:w-[93vw] sm:h-[105vh] w-screen h-screen	 z-10 flex 
      justify-start  bg-corp-pattern   flex-col flex-wrap bg-no-repeat bg-cover items-center'   id='home' >
    <div className=' sm:w-[93vw] sm:h-[105vh] w-screen h-screen	 backdrop-brightness-[0.4] flex 
      justify-star items-center z-20  flex-col bg-none'>
    <p className='sm:text-[1.5rem] sm:h-[20vh] sm:w-[90vw] sm:p-2 sm:bg-none sm:mt-28 sm:ml-1 flex z-40  justify-start items-start pt-24 pr-72 pb-0 pl-0 -mb-1 -ml-96 w-[63vw]  text-white   font-sans text-[2.7rem]' >SEU CABELO E BARBA MOLDURAM SEU ROSTO, <br />
   CUIDE BEM DELES E APAREÇA!</p> 
  <div className='sm:w-[55vw] sm:h-[55vh] w-[15vw] h-[25vh] opacity-100 flex justify-center items-center -mb-7 pt-28 pr-0 pb-0 pl-0 ]'>
  <img  src={foto}  alt='locomarca'/>
  </div>
   
  
    <p className=' sm:flex sm:justify-end sm:pt-2 flex justify-center items-center text-white   font-sans text-[1.5rem] pt-28 pr-0 pb-0 pl-0 '>BORA AGENDAR SEU HORÁRIO?</p>
    </div>
</section>






<div  className="sm:w-[93vw] sm:px-0 sm:h-[190vh] sm:flex sm:flex-col sm:justify-center sm:items-baseline w-screen h-screen z-0 flex justify-center  bg-logo-servico   bg-no-repeat bg-cover items-center"  >
        
        <div className="sm:w-[93vw] sm:h-[190vh] sm:flex sm:flex-col sm:justify-center sm:items-baseline w-screen h-screen backdrop-brightness-[0.7]	z-10 flex  flex-col  justify-center items-center bg-none">
       
        <h2 className="  sm:flex sm:justify-center sm:items-start sm:pl-[10.5rem] sm:pr-0 sm:-mt-[3.5rem]
        flex justify-center items-start  pt-0 pr-0 pb-0 pl-12 w-[50vw]
        mt-[1rem] mr-7 -mb-2 -ml-4 font-sans text-white text-[3.5rem] sm:text-[3.5rem]">SERVIÇOS</h2>
    
         <div className=" sm:pl-[2rem] sm:pr-0 sm:-mb-[7rem] sm:flex sm:flex-col sm:justify-center 
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
<section className=' sm:w-[93vw] sm:h-[116vh] w-screen h-screen	 z-0 flex 
      justify-center  bg-quem-pattern   bg-no-repeat bg-cover items-center' id='quem-somos'>
        <div className="sm:w-[93vw] sm:h-[116vh] w-screen h-screen flex-col	backdrop-brightness-[0.4] z-10 flex justify-center items-center bg-none">
    <h2 className="sm:-mt-[10rem] sm:pr-4 sm:pb-0 sm:pl-4 sm:text-4xl flex  justify-center items-start font-sans text-zinc-50 pr-16 pl-12 pb-10  pt-20 text-7xl">QUEM SOMOS</h2>
    <p className=" sm:text-lg sm:pt-2 sm:pr-4 sm:pb-0 sm:-mb-[7rem]  sm:pl-4  flex justify-center items-start text-justify text-2xl pr-20 pl-20 pb-16  pt-10 text-zinc-50">Sou Felipe Dias, desenvolvedor Full-Stack Júnior. E esse projeto intgrador, 
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
    </>
  );
}

export default Homee;