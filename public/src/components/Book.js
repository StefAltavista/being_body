import React, { useState } from "react";
import InputField from "./InputField";
import buildMessage from "../api/buildMessage";
import submitForm from "../api/submitForm";

export default function Book() {
    const [result, setResult] = useState();
    const [data, setData] = useState({
        name: "",
        pronouns: "",
        email: "",
        phone: "",
        message: "",
    });

    const send = async () => {
        const message = buildMessage(data);
        console.log(message);
        const response = await submitForm(message);
        setResult(response);
    };

    return (
        <div id="book">
            <h3>Book an appointment</h3>
            {!result ? (
                <>
                    <p>Feel Free to contact me to discuss availability!</p>
                    <p>Name:</p>
                    <InputField f={"name"} data={data} setData={setData} />
                    <p>Pronouns:</p>
                    <InputField f={"pronouns"} data={data} setData={setData} />
                    <p>Email:</p>
                    <InputField f={"email"} data={data} setData={setData} />
                    <p>Phone Number</p>
                    <InputField f={"phone"} data={data} setData={setData} />
                    <p>Message</p>
                    <InputField f={"message"} data={data} setData={setData} />
                    <button onClick={send}>SEND</button>
                </>
            ) : (
                <p>{result}</p>
            )}
        </div>
    );
}
