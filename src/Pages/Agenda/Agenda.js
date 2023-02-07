import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../Agenda/imag/logosvejasssdeussss.png";

import { toast } from "react-toastify";

import "./Agenda.css";

const Agenda = () => {
  const [data, setData] = useState("");
  const [tempo, setTempo] = useState("");
  const [servico, setServico] = useState("");
  const [funcionario, setFuncionario] = useState("");
  const [formPague, setFormPague] = useState("");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [items, setItems] = useState([]);
 
  


  useEffect(() => {

    const items = JSON.parse(localStorage.getItem('usuario'));
    console.log(items.nomeCompleto);
    if (items) {
      setItems(items);
     }
        if(update){

          loadClients();
        }

     
    
  }, [update]);

  const updateState = () => {
    setUpdate((state) => !state)
  };

  const loadClients = async () => {
    try {
      setLoading(true);
      const responded = await axios.get("https://strait-back-integrador.herokuapp.com/agendamentos");
      setClients(responded.data);
    } catch (e) {
      console.log(e);
      toast.success("Falha ao buscar os dados do Cliente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };
  async function agendarUsuario(event) {
    event.preventDefault();
    const agendar = {
      data: data, 
      tempo: tempo,
      servico: servico,
      funcionario: funcionario,
      formPague: formPague,
      
    };
    const respon = await axios.post(
      "https://strait-back-integrador.herokuapp.com/agendamentos",
      agendar
    );

    if (respon.status === 200) {

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
                  
      <header className="header-log">
        <img className="logo-log-client" src={logo} alt="locomarca" />
        <p className="logo-nome-client">Agenda client</p>
        <nav className="nav-log">
          <ul className="menu-log" role="menu">
            <div className="dropdown">
              <button className="dropbtn"><Link to="/login"><i className="fa fa-sign-out"   aria-hidden="true"></i></Link></button>
            </div>
          </ul>
        </nav>
      </header>
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

        <div className="retorno-list">
        <button className="up" onClick={updateState}><i className="fa fa-refresh" aria-hidden="true"></i></button>
      {loading && <p>Carregando dados ...</p>}
      <ul>
        {clients.map((client) => (
          <li id={client.id}>{" "}Data: {client.data}<br /> Horario: {client.tempo}<br />Serviço: {client.servico}<br />Funcionário: {client.funcionario}<br />Forma de Pagamento: {client.formPague}</li>
        ))}
      </ul>
     
    </div>
      </div>
    </>
  );
};

export default Agenda;
