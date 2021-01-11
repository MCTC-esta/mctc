import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Axios from "axios";
import Header from "./Component/Navbar/Header";
import Home from "./Component/pages/Home";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import UserContext from "./context/UserContext";
import Edit from "./Component/auth/Edit";
import Search from "./Component/auth/displayHosts";
import "./Style.css";


export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
        id:'',
    });

    useEffect(() => {
        var test ='' ;
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
                    console.log(JSON.stringify(response.data.user.id));
                    test = JSON.stringify(response.data.user.id);
                    console.log('this is the id ',test)
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

    return  <>
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData}}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/preferences" component={Search} />
                    <Route path="/edit" component={Edit} />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    </>

}
