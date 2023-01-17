export default function buildMessage(data) {
    console.log("build message with:", data);

    return (
        `<div><p>Hello Katia!<br></br>` +
        `You received a message from beingbody.net</p>` +
        `<p>Here you are the informations of: <strong>${data.name} (${data.pronouns})</strong></p>` +
        `<p>Email: ${data.email}</p><p>Phone Number: ${data.phone}</p>` +
        `<strong>Message:</strong><p>${data.extraInfo}</p> </div> `
    );
}
