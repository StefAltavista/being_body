import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    return (
        <div id="home">
            <div id="background"></div>

            <Header home={true}></Header>

            <div id="homeBody">
                <img src={"../../img/logo.jpg"} />
                <p>
                    Occurring material of the abstract. Existing, present. Body
                </p>
            </div>

            <div id="Concept" className="section">
                <h3>Concept</h3>
                <div className="sectionBody">
                    <p>
                        {" "}
                        I see the body as a vessel to express and a tool to
                        connect, creating pathways for healing, well being and
                        spiritual growth. My goal is to generate a healing
                        experience through the harmonisation of body, mind and
                        spirit. To create a safe space to connect with, explore
                        and listen to the self through guided corporal
                        awareness:<br></br>
                        <br></br> <br></br>
                        <div style={{ textAlign: "center" }}>
                            <p>
                                Through massage
                                <br></br>Through bodywork <br></br>Through
                                movement
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>When you truly listen, the body will
                                speak. All bodies welcome, valid and celebrated.{" "}
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <p style={{ fontSize: "14px" }}>
                                    *In studio & on call
                                    <br></br>*No erotic massage
                                </p>
                            </p>
                        </div>
                    </p>{" "}
                    <img src={"../../img/concept.png"} />
                </div>
            </div>

            <div id="massage" className="section">
                <h3>Massage Therapy</h3>

                <p>
                    I work with attention and love to discover roots of pain and
                    dissolve them. I blend oils for each session, a mix for each
                    individual based on their pain and their intentions.
                </p>
                <div id="massageBody" className="sectionBody">
                    <img src={"../../img/therapy.jpg"} />
                    <p>
                        With knowledge of body mechanics and alignment, I map
                        the body using fluid, rhythmic motion to restore energy
                        circulation, relax and release with gentle pressure
                        applied through natural gravity, and focus on trigger
                        and pressure points to release tension and pain with the
                        help of mindful breath.
                        <br></br> <br></br>
                        <br></br>I see this rhythmical symbiosis of movement and
                        breath to be a dance between giver and receiver. I use a
                        mix of
                        <br></br>
                        <br></br> <br></br>
                        techniques, guided by what the body tells me. My
                        intention is to create a space to listen. Bring people
                        into a place where they can hear themselves, connect
                        with themselves. When you truly listen, the body speaks.
                    </p>
                </div>
            </div>

            <div id="katiaserena" className="section">
                <h3>Katia Serena</h3>
                <div className="sectionBody">
                    <img src={"../../img/about.jpeg "} />

                    <div id="about">
                        <p>
                            Hi, I am Katia.
                            <br></br> The body has always intrigued me. I have
                            been a mover since a young age, and years of focus
                            on my anatomy as a tool created a{" "}
                            <strong>corperal focus </strong>within me. The more
                            I moved, the more I discovered about myself, about
                            the world around me, about the connection between
                            them. The more I allowed myself to feel, the more I
                            discovered feelings within me. I could observe them,
                            express them, and let them go. An act of katharsis.
                            <br></br> This is where I feel{" "}
                            <strong>healing</strong> lies, in interal focus,
                            that allows one to feel, aknowledge, and realse. We
                            store so many things within our{" "}
                            <strong>body</strong>, and these things, when
                            ignored, acccumlate into tension and pain, which
                            takes their place. I wanted to discover how to
                            confront and heal this pain within myself, and share
                            this with those around me. <br></br> And so my study
                            of movement delvolped into my study of the body and
                            its functions and systems, which delvoped into my
                            study of how to redirect and minipulate them through
                            touch. <br></br>
                            <br></br>
                            <br></br> My experience with{" "}
                            <strong>Traditional Thai Massage</strong>
                            furthered my knowledge of body mechanics and taught
                            me to map the body through lines of energy using
                            metta, loveing kindness, in forms of deep static,
                            and rythmic pressure.
                            <br></br> My experience with{" "}
                            <strong>LOMILOMI</strong> taught me to work with the
                            body in long flowing motions, incorperating mulitple
                            parts of the body, instead of insolating them,
                            instigating a peace and stablitiy that can only be
                            found in the mind when a specific focus cannot be
                            made, but instead a full feeling. <br></br> My
                            experience with trigger points gave me the ability
                            to find painful and tense areas in the muscles and
                            fascia and release them, assiting in achieving long
                            term results. <br></br>
                            <br></br> My passion for{" "}
                            <strong>alternative medicine</strong> and natural
                            healing has led me to research{" "}
                            <strong>aromas </strong>
                            for their therapeutic benefit, and explore their
                            impact on the emotional centers of the brain, and
                            has laid the path for further exploration in sense
                            and sound. <br></br> But what all of my experience
                            as a student and as a practicer has taught me, is
                            that it takes loving hands, combined with deep
                            reflection, and open hearts, to improve health and
                            wellbeing. And this is what I will continue to
                            strive for and continue to explore."
                        </p>
                    </div>
                </div>
            </div>
            <div id="prices" className="section">
                <h3>Prices</h3>
                <div id="overflowBody" className="sectionBody">
                    <img src="../../img/prices.png" />
                    <div id="rates">
                        <p>60 min → 60€ </p>
                        <br></br>
                        <p>90 min → 75€ </p>
                        <br></br>
                        <p>120 min → 95€ </p>
                        <br></br>
                        <p style={{ fontSize: "25px" }}>
                            * Pricing on a sliding scale. Please contact me
                            directly for more information.
                        </p>
                    </div>
                </div>

                <div id="bookLink">
                    <Link to="./book">
                        <p>Book Appointment</p>
                    </Link>
                </div>
            </div>

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
            <Footer></Footer>
        </div>
    );
}
