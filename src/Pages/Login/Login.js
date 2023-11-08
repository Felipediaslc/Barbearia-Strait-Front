import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import Modal from "../Modal/Modal";
import { Input } from "../../componentes/Input/Input"
import { Button} from "../../componentes/Button/Button"



const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const UserLogin = async () => {
    if (!email && !senha) {
      toast.success("Por favor preencha correto", {
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

    const retorn = await axios.post("https://strait-back-integrador.herokuapp.com/usuarios/login", { email,senha });
    if (retorn.data && retorn.status === 200) {
      localStorage.setItem("usuario", JSON.stringify(retorn.data));
      navigate("/agenda");
    }
  };

  const logout =  () =>{
    console.log("logout");
    localStorage.removeItem("usuario");

    navigate("/login");
   };

  return (
    <form className='sm:w-screen w-screen h-screen	 z-0 flex justify-center 
    bg-corp-pattern   bg-no-repeat bg-cover items-center'>
       <div className="sm:w-screen  w-screen h-screen	 z-10 flex justify-center items-center backdrop-brightness-[0.4] bg-none">
      
          <div  className= "  flex flex-col z-20 items-center justify-center sm:mt-5  mb-20 mt-12">
          <h1 className="mb-6 text-2xl tracking-tighter  font-sans text-white">LOGIN</h1>
           <div className="flex flex-col gap-3 mb-3 mt-2 w-96 sm:w-[93vw]  bg-none sm:border-none sm:pl-12 sm:px-3 ">
          <Input id="email"  value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="email" placeholder="E-mail" required={true} />
          <Input id="senha" value={senha}
            onChange={(e) => setSenha(e.target.value)}
          type="password" placeholder="Password" required={true} />
          </div>

           </div>

           <div className="flex absolute z-20 cursor-pointer sm:tracking-widest  sm:mr-20 sm:-ml-10
           justify-start mt-40 sm:mt-36  mr-80 ml-20  text-amarelo " >
            <span onClick={() => setIsModalVisible(true)}>
              Esqueci a senha
            </span>
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(false)} />
            ) : null}
          </div>
          
          <div className="flex absolute sm:mr-4  z-20 items-end justify-center mt-80">
          <Button type="button"  id="Entrar" onClick={(e) => UserLogin(e)} >Entrar</Button>
          </div>
          </div>
    </form>
  );
};

export default Login;
