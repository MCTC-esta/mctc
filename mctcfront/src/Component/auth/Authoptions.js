import React, { useContext } from 'react';
import { useHistory , Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
 



export default function Authoptions() {
    const {userData, setUserData} = useContext (UserContext);


    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    //////
    const displayHosts = () => history.push("/preferences");
    //////
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        })
        localStorage.setItem("auth-token", "")
        history.push("/");
    };

    return (
        <div className = "auth">
            {
                userData.user ? (
                    <>
                <button onClick={logout}>Log out</button>
                <button onClick={displayHosts}>Display Hosts</button>

                <Link id="button" to={'/edit'} >Edit</Link>

                </>
                 ):(
            <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Log in</button>
                </>
                )}
        </div>
    )
}
