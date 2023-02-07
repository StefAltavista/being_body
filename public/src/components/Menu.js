import React from "react";
import { Link } from "react-scroll";
import * as Router from "react-router-dom";

export default function Menu({ toggleMenu, toggle }) {
    return (
        <div id="menu" className={toggleMenu}>
            <Link to="Concept" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>Concept</p>{" "}
            </Link>
            <Link to="massage" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>Massage Therapy</p>
            </Link>
            <Link to="katiaserena" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>About Katia</p>
            </Link>
            <Link to="prices" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>Prices</p>
            </Link>
            <Router.Link to="/book" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>Book Appointment</p>
            </Router.Link>
            <Link to="contacts" spy={true} smooth={true} offset={-125}>
                <p onClick={() => toggle("closeMenu")}>Contacts</p>
            </Link>
        </div>
    );

    {
        /* </Link> */
        // style={{ width: toggleMenu }}
    }
}
