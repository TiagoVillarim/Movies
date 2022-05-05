import React, { useState } from "react";
import { userContext } from "../../../context/contextAPI";
import style from "./style.scss";
import { useNavigate } from "react-router-dom"

export default function SignIn() {

    let navigate = useNavigate()

    const {
        SignIn,
        setSignIn
    } = React.useContext(userContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveData = () => {
        const formData = {
            name: name,
            email: email,
            password: password
        }
        setSignIn(formData);
        navigate("/home")

    }

    return (
        <section className="signin-container">
            <header className="header-container">
                <h1 className="title">
                    Cine-React
                    <img src="https://cdn.iconscout.com/icon/free/png-512/popcorn-1751514-1489363.png" className="popcorn-signin" />
                </h1>
                <div className="mini-text-container">
                    <p className="signin">SignIn page</p>
                </div>
            </header>
            <div className="signIn-section">
                <div>
                    <h2>- Sign In -</h2>
                </div>
                <div className="form-signIn">
                    <input
                        type="name"
                        maxLength={25}
                        minLength={3} value={name}
                        placeholder="Choose your username:"
                        onChange={e => setName(e.target.value)} />

                    <input
                        type="email"
                        maxLength={50}
                        minLength={10}
                        value={email}
                        placeholder="Write you email:"
                        onChange={e => setEmail(e.target.value)} />

                    <input
                        type="password"
                        value={password}
                        placeholder="Choose your password:"
                        onChange={e => setPassword(e.target.value)} />

                    <button onClick={() => saveData()} className="submit-btn">Save</button>
                </div>
            </div>
        </section>
    )
}