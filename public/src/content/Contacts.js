import React from "react";

export default function Contacts({ extension }) {
    return (
        <div id="contacts" className="section">
            <h3>Contacts</h3>
            <div id="overflowBody" className="sectionBody">
                <img src={`img/contact.${extension}`} />
                <div id="links">
                    <a href="mailto:being.body.practice@gmail.com">
                        <p className="contactP">
                            being.body.practice@gmail.com
                        </p>
                    </a>
                    <br></br>
                    <p className="contactP">+49 171 52 42 498</p>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/being.body/"
                    >
                        <p className="contactP"> @Being.Body</p>
                    </a>
                    <br></br>
                    <p className="contactP">Emser Straße 33, 12051 Berlin</p>
                </div>
            </div>
        </div>
    );
}
