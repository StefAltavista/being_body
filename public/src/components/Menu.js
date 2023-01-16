import React from "react";
import { Link } from "react-scroll";

export default function Menu({ toggleMenu, toggle }) {
    return (
        <div id="list" style={{ height: toggleMenu }}>
            <Link to="practice" spy={true} smooth={true} offset={-120}>
                <p
                    onClick={() =>
                        toggle(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    Practice
                </p>
            </Link>
            <Link to="katiaserena" spy={true} smooth={true} offset={-120}>
                <p
                    onClick={() =>
                        toggle(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    Katia Serena
                </p>
            </Link>
            <Link to="massage" spy={true} smooth={true} offset={-120}>
                <p
                    onClick={() =>
                        toggle(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    Massage Therapies
                </p>
            </Link>
            <Link to="prices" spy={true} smooth={true} offset={-120}>
                <p
                    onClick={() =>
                        toggle(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    Prices
                </p>
            </Link>
            <Link to="contacts" spy={true} smooth={true} offset={-120}>
                <p
                    onClick={() =>
                        toggle(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    Contacts
                </p>
            </Link>
        </div>
    );

    {
        /* </Link> */
    }
}
