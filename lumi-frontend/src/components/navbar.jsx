import React from 'react'
import "./navbar.css"

export default function NavBar() {
    return (

        <div className="navTop">
            <div className="navLeft">
                <img className="navLogoImg" src="lumi_logo.png" alt="Lumi Logo"></img>
                <h4 className="navLogoTxt">Lumi</h4>
            </div>
            <div className="navCenter">
                <h3 className="moon vent">Create Vent</h3>
                <div className="moon button"><i class="fa-solid fa-moon"></i></div>
                <div className="sun button"><i class="fa-solid fa-sun"></i></div>
                <h3 className="sun praise">Create Praise</h3>
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