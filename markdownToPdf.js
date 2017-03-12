var markdownpdf = require('markdown-pdf')
var path = require('path')

var mdDocs = [
  path.join(__dirname, 'gordon-reid-cv.md'),
  path.join(__dirname, 'gordon-reid-transcript.md')
]

var pdfDocs = mdDocs.map(function (d) { return d.replace('.md', '.pdf') })

var options = {
  cssPath: path.join(__dirname, 'custom.css')
}

markdownpdf(options).from(mdDocs).to(pdfDocs, function () {
  pdfDocs.forEach(function (d) { console.log('Created', d) })
})
