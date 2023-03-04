import React, { useState, useEffect} from "react";
import {  useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MenuUser from "../../componentes/MenuUser/MenuUser";


import { toast } from "react-toastify";

import "./Agenda.css";

const Agenda = () => {
  const [data, setData] = useState("");
  const [tempo, setTempo] = useState("");
  const [servico, setServico] = useState("");
  const [funcionario, setFuncionario] = useState("");
  const [formPague, setFormPague] = useState("");
  const [items, setItems] = useState([]);
  const [idUsuario, setIdUsuario] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  


  useEffect(() => {

    const items = JSON.parse(localStorage.getItem('usuario'));
    console.log(items.nomeCompleto);
    if (items) {
      setItems(items);
     }
       

     
    
  }, []);

  async function agendarUsuario(event) {
    event.preventDefault();
    const agendar = {
      data: data, 
      tempo: tempo,
      servico: servico,
      funcionario: funcionario,
      formPague: formPague,
      idUsuario: Number(items.id)
    };
    const respon = await axios.post(
      "https://strait-back-integrador.herokuapp.com/agendamentos",
      agendar
    );

    if (respon.status === 200) {
      navigate("/agendamentos");
      toast.success("Agendamento realizado com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }


  return (
    <>

         <MenuUser />

      <div className="container-agend">
        <form className="agendament">
          <h2>{items.nomeCompleto}</h2>

          <div className="dat">
            <input
              type="date"
              name="data"
              id="data"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
          <div className="times">
            <input
              type="time"
              name="tempo"
              id="tempo"
              value={tempo}
              onChange={(event) => setTempo(event.target.value)}
            />
          </div>
          <div className="servico">
            <select
              id="servico"
              name="servico"
              value={servico}
              onChange={(event) => setServico(event.target.value)}
            >
              <option id="cor">Serviço</option>
              <option value="corte" id="cor">
                Corte
              </option>
              <option value="escova" id="cor">
                Escova
              </option>
            </select>
          </div>
          <div className="funcionario">
            <select
              id="funcionario"
              name="funcionario"
              value={funcionario}
              onChange={(event) => setFuncionario(event.target.value)}
            >
              <option id="cor">Funcionário</option>
              <option value="felipe" id="cor">
                Felipe Dias{" "}
              </option>
              <option value="clecio" id="cor">
                Clécio
              </option>
            </select>
          </div>
          <label className="form">Forma de pagamento</label>
          <div className="form-pague">
            <select
              id="form-pague"
              name="form-pague"
              value={formPague}
              onChange={(event) => setFormPague(event.target.value)}
            >
              <option id="cor">Selecione</option>
              <option value="credito" id="cor">
                Cartão de Crédito
              </option>
              <option value="debito" id="cor">
                Cartão de Débito
              </option>
              <option value="pix" id="cor">
                Pix
              </option>
            </select>
          </div>
          <div className="btn-continua">
            <button id="continua" onClick={(e) => agendarUsuario(e)}>
              Agendar
            </button>
          </div>
        </form>

    
      </div>
    </>
  );
};

export default Agenda;
