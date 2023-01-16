import React, { useState } from "react";
import Menu from "./Menu";

export default function Home() {
    const [toggleMenu, setToggleMenu] = useState("0px");

    return (
        <div id="home">
            <div id="background"></div>
            <div id="top"></div>

            <div id="header">
                <div id="titles">
                    <h1>Katia Serena</h1>
                    <h3>B E I N G . B O D Y</h3>
                    <p>Massage - Bodywork - Movement</p>
                </div>

                <p
                    id="menu"
                    onClick={() =>
                        setToggleMenu(toggleMenu == "0px" ? "200px" : "0px")
                    }
                >
                    MENU
                </p>
                <Menu toggleMenu={toggleMenu} toggle={setToggleMenu}></Menu>
            </div>

            <div id="homeBody">
                <p>Existing, present and occurring material of the abstract</p>
                <img src={"../../img/1.jpg"} />
            </div>

            <div id="practice" className="section">
                <img src="" />
                <h3>Practice</h3>
                <p>
                    I see the body as a vessel to express and a tool to connect,
                    creating pathways for healing, well being and spiritual
                    growth. <br></br>My goal is to generate a healing experience
                    through the harmonisation of body, mind and spirit. To
                    create a safe space to connect with, explore and listen to
                    the self through guided corporal awareness. <br></br>
                    <br></br>Through massage. <br></br>
                    <br></br>Through bodywork. Through movement. When you truly
                    listen, the body will speak. All bodies welcome, valid and
                    celebrated. <br></br>
                    <br></br>*In studio and on call <br></br>
                    <br></br>*No erotic massage
                </p>
            </div>

            <div id="katiaserena" className="section">
                <h3>Katia Serena</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <img src="" />
                <div className="space"></div>
            </div>

            <div id="massage" className="section">
                <h3>Massage Therapy</h3>
                <p>
                    I work with attention and love to discover roots of pain and
                    dissolve them.
                </p>
                <p>
                    I blend oils for each session, a mix for each individual
                    based on their pain and their intentions. With knowledge of
                    body mechanics and alignment, I map the body using fluid,
                    rhythmic motion to restore energy circulation, relax and
                    release with gentle pressure applied through natural
                    gravity, and focus on trigger and pressure points to release
                    tension and pain with the help of mindful breath.
                </p>
                <p>
                    I see this rhythmical symbiosis of movement and breath to be
                    a dance between giver and receiver. I use a mix of
                    techniques, guided by what the body tells me. My intention
                    is to create a space to listen. Bring people into a place
                    where they can hear themselves, connect with themselves.
                    When you truly listen, the body speaks.
                </p>
            </div>
            <div id="prices" className="section">
                <h4>Prices</h4>
                <p>60 min - 60€ </p>
                <p> 90 min - 75€ </p>
                <p>120 min - 95€ </p>
                <p>
                    * Reduced pricing available for low income professions.
                    Please contact me directly.
                </p>
            </div>
            <div id="contacts" className="section">
                <h3>Contacts</h3>
                <p>Email: giovo.s.katia@gmail.com</p>
                <p>Phone: 01715242498</p>
            </div>
        </div>
    );
}
