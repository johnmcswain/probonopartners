/**
 * Created by johnmcswain on 6/18/17.
 */

var config = require("./config");
console.log(config.dataFeed);

function feedLoader(){
    $.ajax({
        url: config.dataFeed
    }).done(function(data) {
        $("#content").text(JSON.stringify(data));
    });
}

feedLoader();