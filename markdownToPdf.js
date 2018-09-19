/*jshint node: true, esversion: 6 */
"use strict";

const markdownPDF = require("markdown-pdf");
const path = require("path");

const mdDocs = [
    path.join(__dirname, "gordon-reid-cv.md"),
    path.join(__dirname, "gordon-reid-transcript.md")
];

const pdfDocs = mdDocs.map(function (d) {
    return d.replace(".md", ".pdf")
});

const options = {
    cssPath: path.join(__dirname, "custom.css")
};

markdownPDF(options).from(mdDocs).to(pdfDocs, function () {
    pdfDocs.forEach(function (d) {
        console.log("Created", d)
    })
});
