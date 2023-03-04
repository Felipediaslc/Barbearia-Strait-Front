import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MenuUser from '../../componentes/MenuUser/MenuUser';
import './ListAgendamentos.css'

const ListAgendamentos = () => {

      const [agendament, setAgendament] = useState([]);

      useEffect(() => {
        recuperarAgendamentos();
      }, []);
    
      const recuperarAgendamentos = async () => {

        try {
       
            const rest = await axios.get("https://strait-back-integrador.herokuapp.com/agendamentos");
            setAgendament(rest.data);
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
          }
        }
    
      const preencheTabelaAgen = () => {
        return agendament.map((agend) => (
          <tr>
            <td >{agend.data}</td>
            <td>{agend.tempo}</td>
            <td>{agend.servico}</td>
            <td>{agend.funcionario}</td>
            <td>{agend.formPague}</td>
            
          </tr>
        ));
      };


  return (
    <>
    <MenuUser  />
   <div className='container-agend-list'>
    
   <div className="list-agendamentos">
       <p>Agendamentos</p>
       {agendament.length > 0 ? (
         <table>
           <thead>
             <tr>
               <th>Data</th>
               <th id="tem">Tempo</th>
               <th id="ser">Serviço</th>
               <th id="fun">Funcionario</th>
               <th id="for">Form Pagamento</th>
             </tr>
           </thead>
           <tbody>{preencheTabelaAgen()}</tbody>
         </table>
       ) : (
         "Carregando agendamentos..."
       )}
     </div> 
    
   </div> 
   </>
 )

}

export default ListAgendamentos
