import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Axios from "axios";
import Header from "./Component/Navbar/Header";
import Home from "./Component/pages/Home";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import UserContext from "./context/UserContext";
import Search from "./Component/auth/displayHosts"
import "./Style.css";
import Hero from "../src/Component/Navbar/Hero";
import InfoSection from "../src/Component/Navbar/InfoSection";
import {SliderData} from "../src/data/SliderData";
import {InfoData} from "../src/data/InfoData";
import Cards from "../src/Component/Navbar/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';



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
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    </Switch>
                    <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/preferences" component={Search} />
                    <Hero slides={SliderData}/>
                    
                </Switch>
                <Cards/>
                <InfoSection {...InfoData}/>
                
                
            </UserContext.Provider>

        </BrowserRouter>
        

    </>

}
