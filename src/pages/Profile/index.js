import { useState, useContext } from 'react'
import './profile.css'
import Header from '../../components/Header'
import Title from '../../components/title'
import { FiSettings, FiUpload } from 'react-icons/fi'
import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/avatar.png'

export default function Profile() {

    const { user, signOut } = useContext(AuthContext)

    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile">
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#fff" size={25} />
                            </span>

                            <input type="file" accept="image/*" /> <br />
                            {avatarUrl === null ?
                                <img src={avatar} width="250" height="250" atl="Foto de usuario" />
                                :
                                <img src={avatarUrl} width="250" height="250" atl="Foto de usuario" />
                            }
                        </label>

                        <label>
                            Nome
                        </label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>
                            Email
                        </label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>



                    </form>
                </div>
                <div onClick={() => signOut()} className="container">
                    <button className="logout-btn">
                        Sair
                    </button>
                </div>
            </div>
        </div>
    )
}