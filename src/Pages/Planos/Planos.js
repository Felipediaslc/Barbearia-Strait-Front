import React, {useState} from 'react';


import CadastroAdm from '../CadastroAdm/CadastroAdm';





function Planos() {
    const [isCadast, setIsCadast] = useState(false);
  return (
    <section className="w-screen h-screen	 z-0 flex justify-around  bg-corp-pattern   bg-no-repeat bg-cover items-center">
    <div className="w-screen h-screen backdrop-brightness-[0.4]	z-10 flex  flex-col  justify-center items-center bg-none">
        
        
        <h2 className="flex justify-center items-start   pt-0 pr-0 pb-0 pl-12 w-[50vw]
     mt-[1rem] mr-7 -mb-2 -ml-4 font-sans text-white text-[3.5rem]">PLANO PARCERIA</h2>


        <div className="flex justify-center items-center   mt-5 text-white ">


    <div className="w-[20vw] h-[65vh]  pt-3 pr-0 pb-0 pl-0 mx-12 text-center  backdrop-blur-sm bg-black/50
    rounded-lg border border-transparent shadow shadow-amarelo/80">

        <div className="pt-2 pr-4 pb-4 pl-4 ">
            <h2 className="text-2xl -mb-2 text-amarelo font-bold font-saira">Basic</h2>
            <span className="text-sm text-amarelo tracking-[0.1rem]">de 1 a 2 profissionais</span>
            <p className="text-2xl -mb-4"><i className="mr-2" >R$</i><span className="text-xl px-0 py-1">50</span>/mês</p>
        </div>
        <div className="pt-3 pr-4 pb-2 pl-4 ">
            <ul className="mt-5 mx-6 mb-8 text-start">
                <li><i className=" mr-1  text-amarelo fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="mr-1  text-amarelo fa fa-times-circle"></i>Lista de Tarefas</li>
                <li><i className="mr-1  text-amarelo    fa fa-times-circle"></i>Lista de Atendimento</li>
                <li><i className="mr-1  text-amarelo   fa fa-times-circle"></i>Controle  Financeiro</li>    
            </ul>
            <button onClick={() => setIsCadast(true)} className="w-[8rem]  py-2 px-4 border text-amarelo border-amarelo bg-transparent 
                                                               rounded-full outline-none cursor-pointer transition-[0.3s]
                                                               hover:bg-amarelo hover:border-none hover:text-black ">Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>

    <div className="w-[20vw] h-[65vh]  pt-3 pr-0 pb-0 pl-0 mx-12 text-center  backdrop-blur-sm bg-black/50
    rounded-lg border border-transparent shadow shadow-amarelo/80">
        <div className="pt-2 pr-4 pb-4 pl-4 border-b border-amarelo border-solid">
            <h2 className="text-2xl -mb-2 text-amarelo font-bold font-saira">Standard</h2>
            <span className="text-sm text-amarelo tracking-[0.1rem]">de 5 a 10 profissionais</span>
            <p className="text-2xl -mb-4"><i className="mr-2">R$</i><span className="text-xl px-0 py-1">100</span>/mês</p>
        </div>
        <div className="pt-3 pr-4 pb-2 pl-4">
            <ul className="mt-5 mx-6 mb-8 text-start">
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle "></i>Lista de Tarefas</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle "></i>Lista de Atendimento</li>
                <li><i className="mr-1  text-amarelo  fa fa-times-circle"></i>Controle  Financeiro</li>
                
            </ul>
            <button onClick={() => setIsCadast(true)} className="w-[8rem]  py-2 px-4 border text-amarelo border-amarelo bg-transparent 
                                                               rounded-full outline-none cursor-pointer transition-[0.3s]
                                                               hover:bg-amarelo hover:border-none hover:text-black ">Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>
    <div className="w-[20vw] h-[65vh]  pt-3 pr-0 pb-0 pl-0 mx-12 text-center  backdrop-blur-sm bg-black/50
    rounded-lg border border-transparent shadow shadow-amarelo/80">
        <div className="pt-2 pr-4 pb-4 pl-4 border-b border-amarelo border-solid">
            <h2 className="text-2xl -mb-2 text-amarelo font-bold font-saira">Premium</h2>
            <span className="text-sm text-amarelo tracking-[0.1rem]">de 11 a 20 profissionais</span>
            <p className="text-2xl -mb-4"><i className="mr-2" >R$</i><span className="text-xl px-0 py-1">180</span>/mês</p>
        </div>
        <div className="pt-3 pr-4 pb-2 pl-4 " >
            <ul className="mt-5 mx-6 mb-8 text-start">
                <li><i className="mr-1   text-amarelo  fa fa-check-circle"></i>Lista de Usuários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Cadastrar Funcionários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Funcionários</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Tarefas</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Lista de Atendimento</li>
                <li><i className="mr-1  text-amarelo  fa fa-check-circle"></i>Controle  Financeiro</li>
               
            </ul>
            <button onClick={() => setIsCadast(true)} className="w-[8rem]  py-2 px-4 border text-amarelo border-amarelo bg-transparent 
                                                               rounded-full outline-none cursor-pointer transition-[0.3s]
                                                               hover:bg-amarelo hover:border-none hover:text-black ">Assine já</button>
            {isCadast ? <CadastroAdm onClose={()=> setIsCadast(false)} />: null }
        </div>
    </div>
    </div>
</div>
</section>
  );
}

export default Planos;
