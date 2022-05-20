import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'

export default function Registration() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    var params = new FormData();
    params.set('name', name);
    params.set('password', password);
    params.set('login', login);


    function clickHandler(e) {
        e.preventDefault();
        fetch("http://loginpage.ua:8080/signup.php", {
            method: "POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
            .then(Response => Response.text())
            .then(Response => {
                console.log(Response)
            })
    }
    return (
        <>
            <Header/>
            <div className="App">
                <form id="form">
                    <h1>User name</h1>
                    <input type="text" id="name" className="name" onChange={event => setName(event.target.value)} />
                    <h1>Password</h1>
                    <input type="password" id="password" className="password" onChange={event => setPassword(event.target.value)} />
                    <h1>Login</h1>
                    <input type="text" id="login" className="login" onChange={event => setLogin(event.target.value)} />
                    <Link to="/login">Login</Link>
                    <button onClick={clickHandler}>Go</button>
                </form>
            </div>
        </>
    )
}

