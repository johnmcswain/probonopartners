!function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var e={};o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){var n=e(1);console.log(n.dataFeed),$.ajax({url:n.dataFeed}).done(function(t){$("#content").text(JSON.stringify(t))})},function(t,o){t.exports={dataFeed:"http://dimalpzodor05.cloudfront.net"}}]);