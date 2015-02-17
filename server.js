/**
 * Copyright 2015 Raymond James

 */
var express = require('express');
var app = express();
port = process.argv[2] || 8000;

dirname = process.argv[3] || 'src';

app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(dirname) //where your static content is located in your filesystem
    );
});
app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "\n" +
'Serving from directory /' + dirname + "/\nCTRL + C to shutdown");
