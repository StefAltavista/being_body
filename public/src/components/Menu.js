import React from "react";
import { Link } from "react-scroll";

export default function Menu({ toggleMenu, toggle }) {
    return (
        <div id="menu" style={{ width: toggleMenu }}>
            <Link to="practice" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0px")}>Practice</p>
            </Link>

            <Link to="massage" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0px")}>Massage Therapies</p>
            </Link>
            <Link to="prices" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0px")}>Prices</p>
            </Link>
            <Link to="katiaserena" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0px")}>About Katia Serena</p>
            </Link>
            <Link to="contacts" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0px")}>Contacts</p>
            </Link>
        </div>
    );

    {
        /* </Link> */
    }
}