import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";
import Book from "./Book";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home></Home>} />{" "}
            <Route path="/form" element={<Form></Form>} />{" "}
            <Route path="/book" element={<Book></Book>} />{" "}
            <Route path="/*" element={<Home></Home>} />{" "}
        </Routes>
    );
}
