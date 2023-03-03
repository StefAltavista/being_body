import React from "react";
import { Link } from "react-router-dom";
export default function () {
    return (
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
