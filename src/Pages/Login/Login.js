import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import Modal from "../Modal/Modal";
import { Input } from "../../componentes/Input/Input"
import { Button} from "../../componentes/Button/Button"
import "./Login.css";

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
    <form className="login ">
     
       
          <div  className= "flex flex-col items-center justify-center  mb-20 mt-12">
          <h1 className="mb-6 text-2xl font-sans tracking-widest font-bold text-zinc-50">LOGIN</h1>
           <div className="flex flex-col gap-3 mb-3 mt-2 w-96 sm:ml-20 sm:-mr-10 sm:px-3 ">
          <Input id="email"  value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="email" placeholder="E-mail" required={true} />
          <Input id="senha" value={senha}
            onChange={(e) => setSenha(e.target.value)}
          type="password" placeholder="password" required={true} />
          </div>

           </div>

           <div className="flex absolute cursor-pointer sm:mr-20 sm:-ml-10
           justify-start mt-40 mr-80 ml-20 text-amber-600 " >
            <span onClick={() => setIsModalVisible(true)}>
              Esqueci a senha
            </span>
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(false)} />
            ) : null}
          </div>
          
          <div className="flex absolute items-end justify-center mt-80">
          <Button type="button"  id="Entrar" onClick={(e) => UserLogin(e)} >Entrar</Button>
          </div>
    </form>
  );
};

export default Login;
