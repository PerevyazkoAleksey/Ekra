import React, {useState } from 'react'
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'

export default function Authorization() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const cookies = new Cookies();

    var params = new FormData();
    params.set('password', password);
    params.set('login', login);


    async function clickHandler(e) {
        e.preventDefault();
        const response = await axios.get("http://loginpage.ua:8080/login.php", {
            params: {
                login: login,
                password: password
            }
        })

        cookies.set('name', response.data.name, { path: '/' });
        cookies.set('password', response.data.password, { path: '/' });
        console.log(cookies.get('name'));
        console.log(cookies.get('password'));
    }
  return (
    <div className="App">
            <form id="form">
                <h1>Login</h1>
                <input type="text" id="login" className="login" onChange={event => setLogin(event.target.value)} />
                <h1>Password</h1>
                <input type="password" id="password" className="password" onChange={event => setPassword(event.target.value)} />
                <button onClick={clickHandler}>Go</button>
                <Link to="/registration">Registration</Link>
            </form>
        </div>
  )
}
