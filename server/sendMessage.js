const nodemailer = require("nodemailer");
let EMAIL_TO;
let EMAIL_FROM;

if (process.env.NODE_ENV == "production") {
    EMAIL_TO = process.env.EMAIL_TO;
    EMAIL_FROM = process.env.EMAIL_FROM;
    EMAIL_PASS = process.env.EMAIL_PASS;
} else {
    EMAIL_TO = require("./config.json").EMAIL_TO;
    EMAIL_FROM = require("./config.json").EMAIL_FROM;
    EMAIL_PASS = require("./config.json").EMAIL_PASS;
}
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: { user: EMAIL_FROM, pass: EMAIL_PASS },
});

const sendMessage = (subject, message) => {
    const title = subject.replace("New Client Sheet: ", "");
    return new Promise((resolve, reject) => {
        const options = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
            subject,
            html: message,
            attachments: [
                {
                    filename: `${title}.pdf`,
                    path: `server/files/${title}.pdf`,
                    contentType: "application/pdf",
                },
            ],
        };

        transporter.sendMail(options, function (e, info) {
            if (e) {
                console.log("ERROR Message NOT sent", e);
                reject({
                    e,
                    info,
                    result: ":/ sorry there was a probelem with the server. Please try again or send the info directly at being.body.practice@gmail.com",
                });
            }

            resolve({
                e: null,
                result: "Message sent!",
            });
        });
    });
};

module.exports = sendMessage;
