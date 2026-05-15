const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const md = fs.readFileSync('README.md', 'utf8');

// Configure marked to NOT sanitize HTML (we want raw HTML to pass through)
marked.setOptions({
  gfm: true,
  breaks: false,
});

const htmlBody = marked.parse(md);

const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
@page {
  size: A4;
  margin: 20mm 18mm 20mm 18mm;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 11pt;
  line-height: 1.5;
  color: #1a1a1a;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 20pt;
  color: #031635;
  border-bottom: 2px solid #4AB787;
  padding-bottom: 6px;
  margin-top: 28px;
  margin-bottom: 14px;
  page-break-after: avoid;
}

h2 {
  font-size: 16pt;
  color: #031635;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 4px;
  margin-top: 24px;
  margin-bottom: 12px;
  page-break-after: avoid;
}

h3 {
  font-size: 13pt;
  color: #23707D;
  margin-top: 18px;
  margin-bottom: 8px;
  page-break-after: avoid;
}

h4 {
  font-size: 11pt;
  color: #031635;
  margin-top: 14px;
  margin-bottom: 6px;
  page-break-after: avoid;
}

p {
  margin: 6px 0;
  text-align: justify;
}

/* Tables */
table {
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
  font-size: 10pt;
  page-break-inside: auto;
}

thead {
  display: table-header-group;
}

tr {
  page-break-inside: avoid;
  page-break-after: auto;
}

th {
  background-color: #031635;
  color: white;
  padding: 8px 10px;
  text-align: left;
  font-weight: 600;
  border: 1px solid #031635;
}

td {
  padding: 6px 10px;
  border: 1px solid #d0d0d0;
  vertical-align: top;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}

/* Caratula centering */
div[align="center"], div[style*="text-align: center"] {
  text-align: center !important;
}

div[align="center"] table, div[style*="text-align: center"] table {
  margin: 0 auto !important;
  text-align: center !important;
}

div[align="center"] th, div[style*="text-align: center"] th {
  text-align: center !important;
}

div[align="center"] td, div[style*="text-align: center"] td {
  text-align: center !important;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px auto;
}

/* Page breaks */
div[style*="page-break-after"] {
  page-break-after: always;
  break-after: page;
}

/* Code blocks */
pre, code {
  font-family: 'Courier New', monospace;
  font-size: 9pt;
  background: #f4f4f4;
  padding: 4px;
  border-radius: 3px;
}

pre {
  padding: 10px;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
}

/* Lists */
ul, ol {
  margin: 6px 0;
  padding-left: 24px;
}

li {
  margin: 3px 0;
}

/* Links */
a {
  color: #23707D;
  text-decoration: none;
}

/* Blockquotes */
blockquote {
  border-left: 3px solid #4AB787;
  margin: 10px 0;
  padding: 6px 14px;
  background: #f0faf5;
}

/* Strong/bold */
strong, b {
  color: #031635;
}

/* Ensure center table on caratula is properly centered */
table[style*="margin: 0 auto"] {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
</head>
<body>
${htmlBody}
</body>
</html>`;

fs.writeFileSync('README.html', fullHtml);
console.log('README.html generated successfully');
