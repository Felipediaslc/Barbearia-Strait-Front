import React, { useState } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Button} from "../../componentes/Button/Button"
import './Cadastros.css';


const Cadastro = ( ) => {
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpfUser, setCpfUser] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate();

 async function cadastrarUsuario (event) {
    
    event.preventDefault()
    const usuario = {
      nomeCompleto:nomeCompleto,
      telefone: telefone,
      cpfUser: cpfUser,
      email: email,
      senha:senha
    }
    const retorno = await axios.post('https://strait-back-integrador.herokuapp.com/usuarios', usuario)
    console.log(retorno)
    if (retorno.status === 200) {
      navigate("/login");
      toast.success("Usuário criado com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
      
    } 
}

const notify = () => toast("Cadastro realizado !");

   

  return  (

    <form className='cadast' >
      <div  className= "flex  w-50 flex-col items-center justify-center   only:sm:w-60 mb-20 mt-20">
      <h1 className="mb-6 text-2xl font-sans tracking-widest font-bold text-zinc-50">CRIE SUA CONTA</h1>
      <div className="relative z-0  mb-6 group">
      <input type="text" name="floating_nome" id="floating_nome"
       value={nomeCompleto} 
        onChange={(event) => setNomeCompleto(event.target.value)} 
        required className="block py-2.5 px-0 w-80 text-sm 
       text-white  bg-transparent border-0 border-b-2 border-white appearance-none
       dark:text-white dark:border-white       
        dark:focus:border-amber-500 focus:text-amber-500  focus:outline-none 
        focus:ring-0 focus:border-amber-500 peer" placeholder=" "  />

      <label htmlFor="floating_nome" className="peer-focus:font-medium absolute text-sm
        text-white  
          dark:text-white 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 

      peer-focus:left-0 peer-focus:text-amber-500      peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
      peer-focus:-translate-y-6">Nome Completo</label>
  </div>


  <div className="relative sm:-mt-3 z-0  mb-6 group">
      <input type="email" name="floating_email" id="floating_email"
      value={email}
      onChange={(event) => setEmail(event.target.value)} 
      
      className="block py-2.5 px-0  text-sm w-80
       text-white border-white 
      bg-transparent border-0 border-b-2 appearance-none
       dark:text-white dark:border-white
        dark:focus:border-amber-500
       focus:outline-none focus:ring-0 focus:text-amber-500 focus:border-amber-500 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white
       dark:text-white
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
        peer-focus:text-amber-500  peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
         peer-focus:-translate-y-6">Email </label>
  </div>

 <div className="relative  sm:-mt-3 z-0  mb-6 group">
      <input type="password" name="floating_password" id="floating_password" 
      value={senha}
      onChange={(event) => setSenha(event.target.value)} 
    
      className="block py-2.5 px-0  text-sm text-white w-80
      bg-transparent border-0 border-b-2 border-white appearance-none
       dark:text-white dark:border-white
       dark:focus:border-amber-500 
      focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " required />

      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-white
       dark:text-white duration-300
       transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
        peer-focus:text-amber-500 peer-focus:dark:text-amber-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>


  <div className="relative sm:-mt-3 z-0  mb-6 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-80 text-sm text-white 
      bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white
       dark:focus:border-amber-500 
      focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white dark:text-white
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-500 
       peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
        peer-focus:-translate-y-6">Confirm password</label>
  </div>
 



  <div className="grid  sm:px-1 sm:-mt-3 sm:grid-rows-2 sm:grid-cols-2 sm:gap-1 md:grid-cols-2 md:gap-7"  >
    <div className="relative sm:-ml-11   z-0 mb-6 group">
        <input type="tel"  name="floating_phone" id="floating_phone" 
        value={telefone} 
        onChange={(event) => setTelefone(event.target.value)} 
       
        className="block py-2.5 px-0 w-36
        sm:w-30 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white 
         dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-white dark:text-white 
        duration-300 sm:text-xs transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-500 
        peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6">(DDD) Telefone </label>
    </div>
    <div className="relative  sm:ml-3 z-0  mb-6 group">
        <input type="text" name="floating_cpf" id="floating_cpf"
        value={cpfUser}
        onChange={(event) => setCpfUser(event.target.value)} 
        
        className="block py-2.5 w-36 text-sm text-white 
         sm:w-30 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white
         dark:focus:border-amber-500       focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " required />
        <label htmlFor="floating_cpf" className="peer-focus:font-medium absolute text-sm text-white dark:text-white
         duration-300 sm:text-xs transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-500
          peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
           peer-focus:-translate-y-6">CPF (xxx.xxx.xxx-xx)</label>
    </div>
  </div>
  <div className="flex sm:mt-14 absolute items-end justify-center group -mb-80 mt-40">
          <Button type="button"  id="Cadastrar" onClick={(e) => cadastrarUsuario(e)} >Cadastrar</Button>
          </div>
  </div>
  </form>
   
  );
}

export default Cadastro;