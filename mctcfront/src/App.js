import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Axios from "axios";
import Home from "./Component/pages/Home";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import UserContext from "./context/UserContext";
import Search from "./Component/auth/displayHosts"
import "./App.css";
import Navbar from "./Component/Navbar";


export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLogIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = ""
            }
            var axios = require('axios');
            var data = JSON.stringify({ "email": "user@gmail.com", "password": "password" });

            var config = {
                method: 'post',
                url: 'http://localhost:4000/users/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });

// to comment is case of error

            //     const tokenRes = await Axios.post(
            //         "http://localhost:4000/users/tokenIsValid", null,
            //         {
            //             headers: { "x-auth-token": token }
            //         }
            //     );
            //     if (tokenRes.data){
            //         const userRes = await Axios.get(
            //             "http://localhost:4000/users/",
            //             {
            //                 headers: { "x-auth-token": token }
            //             });
            //     setUserData({
            //         token,
            //         user: userRes.data,
            //     })
            // }

// to commenet in case of error

        }
        checkLogIn();
    }, []);

    return <>
        <Router>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/preferences" component={Search} />
                </Switch>
            </UserContext.Provider>
        </Router>
    </>

}
