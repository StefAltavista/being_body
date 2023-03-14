import React from "react";
import { Routes, Route } from "react-router-dom";
import { browserName } from "react-device-detect";

import Home from "./Home";
import Form from "./Form";
import Book from "./Book";
import Footer from "./Footer";

export default function App() {
    const extension = browserName == "Safari" ? "png" : "webp";
    console.log(browserName);
    return (
        <div id="app">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home extension={extension} />}
                />
                <Route path="/form" element={<Form />} />{" "}
                <Route path="/book" element={<Book />} />{" "}
                <Route path="/*" element={<Home extension={extension} />} />{" "}
            </Routes>
            <Footer></Footer>
        </div>
    );
}
