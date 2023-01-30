import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header({ home }) {
    const [toggleMenu, setToggleMenu] = useState("0px");

    return (
        <div id="header">
            <div id="titles">
                <h1>Being Body</h1>
                <p>-</p>
                <p>Massage - Bodywork - Movement</p>
            </div>

            <div id="menuArea">
                {home ? (
                    <>
                        {" "}
                        <p
                            id="label"
                            onClick={() =>
                                setToggleMenu(
                                    toggleMenu == "0vw" ? "90vw" : "0vw"
                                )
                            }
                        >
                            MENU
                        </p>
                        <Menu
                            toggleMenu={toggleMenu}
                            toggle={setToggleMenu}
                        ></Menu>
                    </>
                ) : (
                    <Link to="/">
                        <p>← Back</p>
                    </Link>
                )}
            </div>
        </div>
    );
}
