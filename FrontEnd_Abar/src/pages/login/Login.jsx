import { useRef } from 'react'
import LayoutFeed from '../../Components/LayoutFeed/LayoutFeed'
import api from '../../service/api'
import './index.css'
const Login = () => {

    const username = useRef()
    const password = useRef()

    const nome = useRef()

    function logar(event) {
        event.preventDefault()
        api.post('/login', {
            username: username.current.value,
            password: password.current.value
        }).then((res) => {
            localStorage.setItem("token", res.headers.authorization)
            window.location.reload()
        })
            .catch((err) => alert("Usuario ou senha invalidos"))
    }

    function sair() {
        localStorage.removeItem("token")
        window.location.reload()
    }

    function enviarDados(event){
        event.preventDefault()
        api.post('/pessoa/admin/add', {
            nome: nome.current.value
        }, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        }).then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <>
        <div></div>
            {localStorage.getItem("token") === null ?
                <div className='contaner login text-center'>
                    <h1>Login</h1>
                    <form onSubmit={logar}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" ref={username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref={password} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                    </form>
                    
                   

                </div>
                : 
                <>
                  <LayoutFeed></LayoutFeed>
                </>
                }
                </>
    )
}

export default Login;