import React from "react";
import StarWarsLogo from '../../public/img/StarWars-logo.png';

export default function Navbar() {
    return (
        <nav>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1920px-Star_wars2.svg.png" />  */}
            <img src={StarWarsLogo} />       
        </nav>
    )
}