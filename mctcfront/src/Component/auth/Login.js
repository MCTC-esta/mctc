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
        alert(loginRes.data)
        setUserData({
            token:loginRes.data.token,
            user:loginRes.data.user
        });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
    };

    return (
        <div className="main1" Style={{"align":"center"}}>
        <h2 className="sign1" Style={{"align":"center"}}>Log in</h2>

        <form className="form1" onSubmit={submit}>
            <label htmlFor= "login-email">Email</label>
            <input className="un1" Style={{"align":"center"}} type="email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor= "login-password">Password</label>
            <input className="pass1" Style={{"align":"center"}} type="password" onChange={(e) => setPassword(e.target.value)}/>
            
            <input className="submit1" type="submit" value="Log-in" />

        </form>
    </div>
    )
}
