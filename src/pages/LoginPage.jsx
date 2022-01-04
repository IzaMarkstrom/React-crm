import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import Button from '../components/Button'


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()    

    function handleOnSubmit(e) {
        e.preventDefault()
        const payload = {email, password}
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("crm",token)
            navigate('/home')
        })
    }

    return (
        <div className="containerLogin">
            <div className="loginBox">
            <h3 className="text-center">Login Page</h3>
                <form onSubmit={handleOnSubmit}>
                    <p className="label">Email:</p>
                    <input
                        className="form-control"
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="label">Password:</p>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button>Login</Button>
                </form>
                <p className="mt-2">Not a user? Click <a href="#" className="link-info">here</a> to create a user</p>
            </div>
        </div>
    )
}
