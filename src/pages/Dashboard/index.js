import { useState } from "react"
import './dashboard.css'

import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Dashboard() {

    const [chamados, setChamados]=useState([1])

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Atendimento">
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                     <div className="container dashboard">
                     <span>Nenhum chamado registrado...</span>
     
     
                     <Link to="/new" className="new">
                     <FiPlus size={25} color="#fff"/>
                     Novo Chamado
                     </Link>
     
                     </div>
                ) : (
                    <>
                    <Link to="/new" className="new">
                     <FiPlus size={25} color="#fff"/>
                     Novo Chamado
                     </Link>

                     <table>
                         <thead>
                             <tr>
                                 <th scope="col">Clientes</th>
                                 <th scope="col">Assuntos</th>
                                 <th scope="col">Status</th>
                                 <th scope="col">Cadastrado em</th>
                                 <th scope="col">#</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td data-label="Cliente">Sujeito</td>
                                 <td data-label="Assunto">Suporte</td>
                                 <td data-label="Status">
                                     <span className="badge" style={{backgroundColor: "#5cb85c"}}>Em aberto</span>
                                 </td>
                                 <td data-Label="Cadastrado">20/06/2021</td>
                                 <td data-Label="#">
                                     <button className="action" style={{backgroundColor: "#3583f6"}}>
                                         <FiSearch color="#fff" size={17}/>
                                     </button>
                                     <button className="action" style={{backgroundColor: "#f6a935"}}>
                                         <FiEdit2 color="#fff" size={17}/>
                                     </button>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                    </>
                )
            }

            </div>

        </div>
    )
}