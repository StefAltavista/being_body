export default async function submitForm(message, cert) {
    return await fetch("/api/sendForm", {
        headers: {
            "Content-type": "application/json",
            Authorization: cert,
        },
        method: "POST",
        body: JSON.stringify({ message }),
    })
        .then((res) => res.json())
        .then(({ result }) => {
            return result;
        });
}
