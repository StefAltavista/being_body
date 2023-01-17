import React from "react";

import Home from "./Home";
import Form from "./Form";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home></Home>} />{" "}
            <Route path="/form/:cert" element={<Form></Form>} />{" "}
        </Routes>
    );
}
