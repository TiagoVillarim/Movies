import React, { useState } from "react";
import { userContext } from "../../../context/contextAPI";
import style from "./style.scss";
import { useNavigate } from "react-router-dom"

export default function Login() {

    let navigate = useNavigate();

    const {
        login,
        setLogin
    } = React.useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const loginData = {
            email: email,
            password: password
        };

        setLogin(loginData);
        navigate("/home")
    };

    const navigateToSignIn = () => {
        navigate("/signin")
    }


    return (
        <section className="section-container">
            <header className="header-container">
                <h1 className="title">
                    Cine-React
                    <img src="https://cdn.iconscout.com/icon/free/png-512/popcorn-1751514-1489363.png" className="popcorn-login" />
                </h1>
                <div className="mini-text-container">
                    <p className="sign-in" onClick={() => navigateToSignIn()}>Sign-in</p>
                    <p className="login">Login page</p>
                </div>
            </header>
            <div className="login-section">
                <div>
                    <h2>- Login -</h2>
                </div>
                <div className="form-login">
                    <input
                        type="email"
                        value={email}
                        placeholder="Type your email:"
                        onChange={e => setEmail(e.target.value)} />

                    <input
                        type="password"
                        value={password}
                        placeholder="Type your password:"
                        onChange={e => setPassword(e.target.value)} />

                    <button className="submit-btn" onClick={() => handleSubmit()}>Log-in</button>
                </div>
            </div>
        </section>
    )
}