/**
 * Created by johnmcswain on 6/18/17.
 */

var config = require("./config");

function feedLoader(){
    $.ajax({
        url: config.dataFeed
    }).done(function(data) {
        console.log(data);
        tableBuilder(data.rss.channel.item);
    });
}

function tableBuilder(list){
    list.sort(function(a, b) {
        if(a.categories && b.categories) {
            var nameA = a.categories.category.toUpperCase(); // ignore upper and lowercase
            var nameB = b.categories.category.toUpperCase(); // ignore upper and lowercase
        }else{
            return 0;
        }
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;  // names are equal
    });


    list.forEach(function(item){
        $("#project_table").append(
            "<tr><td><div><strong>"+item.title+"</strong></div><div>"+item.mission+"</div><br><p>"+item.matters.matter+"</p></td></tr>"
        );
    });
}

feedLoader();
