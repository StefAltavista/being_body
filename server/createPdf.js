const pdf = require("html-pdf-node");
const fs = require("fs");

const createPdf = (subject, message) => {
    const title = subject.replace("New Client Sheet: ", "");
    const options = { format: "A4" };
    let file = { content: message };
    return new Promise((resolve, reject) => {
        pdf.generatePdf(file, options)
            .then((pdfBuffer) => {
                fs.writeFile(`./server/files/${title}.pdf`, pdfBuffer, (e) => {
                    e ? reject(e) : resolve("ok");
                });
            })
            .catch((e) => reject(e));
    });
};

module.exports = createPdf;
