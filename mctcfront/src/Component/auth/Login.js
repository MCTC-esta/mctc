import React, {useState, useContext} from 'react';
import Axios from "axios";
import UserContext from "../../context/UserContext"
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory()


    const submit = async (e) => {
        e.preventDefault();
        const loginUser = { email, password };
        const loginRes = await Axios.post("http://localhost:4000/users/login", loginUser);
        setUserData({
            token:loginRes.data.token,
            user:loginRes.data.user
        });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
    };

    return (
        <div>
        <h2>Log in</h2>
        <form className="form" onSubmit={submit}>
            <label htmlFor= "login-email">Email</label>
            <input id="login-email" type="email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor= "login-password">Password</label>
            <input id="login-password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            
            <input type="submit" value="Log-in" />

        </form>
    </div>
    )
}
