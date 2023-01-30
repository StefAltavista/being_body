const express = require("express");
const path = require("path");
const sendMessage = require("./sendMessage");
const createPdf = require("./createPdf");
const app = express();
const cert = require("./config.json").CERTIFICATION;

app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());

app.post("/api/sendMessage", async (req, res) => {
    if (req.headers.authorization == cert) {
        const { subject, message } = req.body;

        subject != "New Booking Request from Beingbody.net"
            ? await createPdf(subject, message)
            : null;

        sendMessage(subject, message)
            .then(({ e, info, result }) => {
                res.json({
                    e,
                    info,
                    result,
                });
            })
            .catch(({ e, info, result }) => {
                console.log("Server ERROR:", e);
                res.json({ e, info, result });
            });
    } else {
        console.log("no credentials");
        res.json({ e: "NO_CREDENTIAL" });
    }
});

app.set("port", 5001);

var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});
