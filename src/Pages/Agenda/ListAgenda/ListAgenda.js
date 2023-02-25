import React from 'react'

const ListAgenda = () => {
  return (
        <div className="container-agend">
        

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
   
  )
}

export default ListAgenda
