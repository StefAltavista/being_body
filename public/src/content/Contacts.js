import React from "react";

export default function Contacts() {
    return (
        <div id="contacts" className="section">
            <h3>Contacts</h3>
            <div id="overflowBody" className="sectionBody">
                <img src={"../../img/contact.png "} />
                <div id="links">
                    <a href="mailto:being.body.practice@gmail.com">
                        <p>being.body.practice@gmail.com</p>{" "}
                    </a>
                    <br></br>
                    <p>+49 171 52 42 498</p>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/being.body/"
                    >
                        <p> @Being.Body</p>
                    </a>
                    <br></br>
                    <p>Emser Straße 33, 12051 Berlin</p>
                </div>
            </div>
        </div>
    );
}
