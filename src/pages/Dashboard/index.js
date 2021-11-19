import { useContext } from "react"
import {AuthContext} from '../../contexts/auth'

export default function Dashboard(){

    const { signOut }=useContext(AuthContext)

    return(
    <div>
        <div>Página dashboard</div>
        <button onClick={()=> signOut()}>Fazer logout</button>

    </div>
    )
}