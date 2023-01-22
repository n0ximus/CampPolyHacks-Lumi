import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (

        <div className="navTop">
            <div className="navLeft">
                <Link className="link" to="/">

                    <img className="navLogoImg" src="lumi_logo.png" alt="Lumi Logo"></img>                </Link>

                <Link className="link" to="/">

                    <h4 className="navLogoTxt">Lumi</h4>
                </Link>

            </div>
            <div className="navCenter">
                <Link className="link" to="/writeRant">

                    <h3 className="moon vent">Create Rant</h3>
                </Link>

                <Link className="link" to="/writeRant">
                <div className="moon button"><i class="fa-solid fa-moon"></i></div>
                </Link>
                <Link className="link" to="/writePraise">

                <div className="sun button"><i class="fa-solid fa-sun"></i></div>

                </Link>
                <Link className="link" to="/writePraise">

                    <h3 className="sun praise">Create Praise</h3>                </Link>

            </div>
            <div className="navRight">
                <ul className="navRightItems">
                    <li className="navRightIcon settings"><i class="fa-solid fa-gear"></i></li>
                    <li className="navRightIcon mail"><i class="fa-solid fa-envelope"></i></li>
                    <li className="navRightIcon user"><i class="fa-solid fa-user"></i></li>
                </ul>
            </div>
        </div>
    )
}