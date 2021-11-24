import { useState, useEffect } from "react"
import './dashboard.css'

import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi"
import { Link } from "react-router-dom"
import firebase from '../../services/firebaseConection'
import {format} from 'date-fns'


const listRef = firebase.firestore().collection("chamados").orderBy("created","desc")

export default function Dashboard() {

    const [chamados, setChamados]=useState([])
    const [loading, setLoading]=useState(true)
    const [loadingMore, setLoadingMore]=useState(false)
    const [isEmpty, setIsEmpty]=useState(false)
    const [lastDocs, setLastDocs]=useState()





    useEffect(()=>{

        loadChamados()

        return ()=>{

        }
    },[])

    async function loadChamados(){
    await listRef.limit(5)
    .get()
    .then((snapshot)=>{
    updateState(snapshot)
    })
    .catch((err)=>{
        console.log("Deu algum erro: ", err)
        setLoadingMore(false)
    })
    setLoading(false)
    }

    async function updateState(snapshot){
    const isCollectionEmpty = snapshot.size === 0

    if(!isCollectionEmpty){
        let lista = []

    snapshot.forEach((doc)=>{
        lista.push({
            id: doc.id,
            assunto: doc.data().assunto,
            cliente: doc.data().cliente,
            clienteId: doc.data().clienteId,
            created: doc.data().created,
            createdFormated: format(doc.data().created.toDate(),"dd/MM/yyy"),
            status: doc.data().status,
            complemento: doc.data().complemento

        })
    })
    const lastDoc=snapshot.docs[snapshot.docs.length - 1] //Pegando o ultimo documento buscado
    setChamados(chamados=> [...chamados, ...lista])
    setLastDocs(lastDoc)
    }else{
        setIsEmpty(true)
    }
    setLoadingMore(false)
    }

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