const express = require("express");
const path = require("path");
const { sendMessage } = require("./sendMessage");
const app = express();
const password = require("./config.json").PASSWORD;

app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());

app.post("/api/sendForm", (req, res) => {
    if (req.headers.authorization == password) {
        const { message } = req.body;

        sendMessage(message)
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
        res.json({ e: "ERROR" });
    }
});

app.set("port", process.env.PORT || 5001);

var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});
