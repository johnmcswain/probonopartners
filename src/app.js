/**
 * Created by johnmcswain on 6/18/17.
 */

var config = require("./config");
console.log(config.dataFeed);

function xmlLoader(){
    $.ajax({
        url: config.dataFeed
    }).done(function(data) {
        console.log(data);
        var xmlDoc = $.parseXML( data );
        var $xml = $( xmlDoc );
        $("#content").text($xml);
    });
}

xmlLoader();