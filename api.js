var http = require('http');
var text = (process.argv[2] +"%20" + process.argv[3]);
console.log(text);
//var url = //'http://api.dronestre.am/data';//http://api.fixer.io/latest';
var url = 'http://apilayer.net/api/detect?access_key=b34239c65cad5ff0c440671a7ea697f0&query='+text;
//accessKey = 'b34239c65cad5ff0c440671a7ea697f0';
//var url = 'http://apilayer.net/api'
http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var apiResponse = JSON.parse(body);
        console.log("Got a response: ", apiResponse.results);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});