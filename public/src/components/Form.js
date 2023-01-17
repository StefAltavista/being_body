import React, { useState } from "react";
import { useParams } from "react-router-dom";
import buildMessage from "../api/buildMessage";
import submitForm from "../api/submitForm";

export default function Form() {
    const { cert } = useParams();
    console.log(cert);
    const [missingData, setMissingData] = useState(false);
    const [result, setResult] = useState();

    const [data, setData] = useState({
        name: "",
        pronouns: "",
        email: "",
        phone: "",
        allergies: "",
        injuries: "",
        activities: "",
        discomfortAreas: "",
        extraInfo: "",
        music: "",
        aroma: "",
        distresses: "",
    });
    const inputField = (f) => {
        return f == "extraInfo" || f == "distresses" ? (
            <textarea
                type="text"
                value={data[f]}
                onChange={(e) =>
                    setData({
                        ...data,
                        [f]: e.target.value,
                    })
                }
            />
        ) : (
            <input
                type="text"
                value={data[f]}
                onChange={(e) => setData({ ...data, [f]: e.target.value })}
            />
        );
    };

    const send = async () => {
        if (!data.name) {
            setMissingData(true);
            return;
        }
        const message = buildMessage(data);
        console.log(message);
        const response = await submitForm(message, cert);
        // setResult(response);
    };

    return (
        <div id="form">
            {!result ? (
                <>
                    <h3>Wellness Questions</h3>
                    <p id="privacy">
                        * All information is held in strictest confidence. At no
                        given point is information disclosed or shared without
                        client`s consent. You may choose to skip answering any
                        question you feel impinges on personal information you
                        do not wish to disclose.
                    </p>
                    {missingData && <p>Please enter your name!</p>}

                    <div>
                        <div id="info" className="formSection">
                            <p>Name</p>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                                onClick={() => setMissingData(false)}
                            />
                            <p>Pronouns</p>
                            {inputField("pronouns")}
                            <p>Email</p>
                            {inputField("email")}
                            <p>Phone</p>
                            {inputField("phone")}
                        </div>
                        <div id="physical" className="formSection">
                            <p>Do you have any allergies?</p>
                            {inputField("allergies")}
                            <p>Do you have any prior or chronic injuries?</p>
                            {inputField("injuries")}
                            <p>
                                What are the physical activities in which you
                                engage?
                            </p>
                            {inputField("activities")}

                            <p>
                                In what areas are you feeling discomfort or
                                pain?
                            </p>
                            {inputField("discomfortAreas")}

                            <p>
                                Is there any extra information you would like to
                                share?:
                            </p>
                            {inputField("extraInfo")}
                        </div>
                        <div id="atmosphere" className="formSection">
                            <p>Do you have any music preferences?</p>
                            {inputField("music")}
                            <p>Is there any aroma that disturbs you?</p>
                            {inputField("aroma")}
                        </div>

                        <div id="personal" className="formSection">
                            <p>
                                Is there any strougle distresses or strains you
                                would like to share?
                            </p>
                            {inputField("distresses")}
                        </div>

                        <button onClick={send}>Send</button>
                    </div>
                </>
            ) : (
                <p>{result}</p>
            )}
        </div>
    );
}
