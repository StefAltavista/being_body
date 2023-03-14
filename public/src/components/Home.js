import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Welcome from "../content/Welcome";
import Concept from "../content/Concept";
import Massage from "../content/Massage";
import Aroma from "../content/Aroma";
import Prices from "../content/Prices";
import About from "../content/About";
import Contacts from "../content/Contacts";

export default function Home({ extension }) {
    return (
        <div id="home">
            <Header home={true} extension={extension}></Header>
            <Welcome extension={extension} />
            <Concept extension={extension} />
            <Massage extension={extension} />
            <Aroma extension={extension} />
            <Prices extension={extension} />
            <About extension={extension} />
            <Contacts extension={extension} />
        </div>
    );
}
