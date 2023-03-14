import React from "react";

export default function Welcome({ extension }) {
    return (
        <div id="welcome">
            <img src={`img/logoLight.${extension}`} />
            <p>Occurring material of the abstract. Existing, present. Body</p>
        </div>
    );
}
