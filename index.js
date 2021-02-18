const express = require('express');
const app = express();
const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./pdfFiles/Introduction_Sandeep.pdf');

pdf(dataBuffer).then(function(data) {
 
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text); 
    app.get('/pdfdata',(req,res)=>{
        res.json(data.text);
    });
    
        
});

app.get('/',(req,res)=>{
    res.json("Hello move for pdf text -> /pdfdata")
});

app.listen(3000, (req,res)=>{
    console.log("Server started at 3000");
});