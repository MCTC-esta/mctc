import React from 'react';
import {Link} from "react-router-dom";
import Authoptions from "../auth/Authoptions";

export default function Header() {
    return (
        <div id="header">
            <Link to="/"><h1 className="title">MCTC</h1></Link>
            <Authoptions />
        </div>
    )
}
