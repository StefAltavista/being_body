import React from "react";
import { Link } from "react-router-dom";
export default function () {
    return (
        <div id="prices" className="section">
            <h3>Prices</h3>
            <div id="overflowBody" className="sectionBody">
                <img src="prices.png" />
                <div id="rates">
                    <p>30 min → 20€ ~ 30€ </p>
                    <br></br>
                    <p>60 min → 40€ ~ 60€ </p>
                    <br></br>
                    <p>90 min → 70€ ~ 90€ </p>
                    <br></br>
                    <p>120 min → 100€ ~ 120€ </p>
                    <br></br>
                    <p style={{ fontSize: "20px" }}>
                        * Pricing on a sliding scale. Please contact me directly
                        for more information.
                    </p>
                </div>
            </div>

            <div id="bookLink">
                <Link to="./book">
                    <p>Book Appointment</p>
                </Link>
            </div>
        </div>
    );
}
