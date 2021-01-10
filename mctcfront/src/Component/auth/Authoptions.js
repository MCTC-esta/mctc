import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import '../Footer.css';



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
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/Login'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Sign in
                  </Link>
                </li>
                <li>
              <Link
                to='/Register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
              </ul>
                </>
                 ):(
            <>
                </>
                )}
        </div>
    )
}
