import React from "react";
import { Link } from "react-scroll";

export default function Menu({ toggleMenu, toggle }) {
    return (
        <div id="menu" style={{ width: toggleMenu }}>
            <Link to="Concept" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>Concept</p>{" "}
            </Link>
            <Link to="massage" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>Massage Therapy</p>
            </Link>
            <Link to="katiaserena" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>About Katia Serena</p>
            </Link>
            <Link to="prices" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>Prices</p>
            </Link>
            <Link to="bookLink" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>Book Appointment</p>
            </Link>
            <Link to="contacts" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("0vw")}>Contacts</p>
            </Link>
        </div>
    );

    {
        /* </Link> */
    }
}
