import React, { useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState("0px");

    return (
        <div id="header">
            <div id="titles">
                <h1>Being Body</h1>
                <p>-</p>
                <p>Massage - Bodywork - Movement</p>
            </div>

            <div id="menuArea">
                <p
                    id="label"
                    onClick={() =>
                        setToggleMenu(toggleMenu == "0px" ? "350px" : "0px")
                    }
                >
                    MENU
                </p>
                <Menu toggleMenu={toggleMenu} toggle={setToggleMenu}></Menu>
            </div>
        </div>
    );
}
