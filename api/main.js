/**
 * Created by johnmcswain on 6/19/17.
 */
var http = require("http");
var rp = require('request-promise');
var parser = require('xml2json');
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    rp('http://www.pbpatl.com/feed')
        .then(function (xml) {
            var data = parser.toJson(xml);
            //console.log(data);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.type('application/json');
            res.json(JSON.parse(data));
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err);
        });
});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!')
})
