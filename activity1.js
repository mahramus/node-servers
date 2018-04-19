var http = require("http"); // built into node; no need to install

var handleRequestOne = function(req, res) {            // request, response
    res.end("You look really great today. Like, unfair to the rest of us great.");
};

var server = http.createServer(handleRequestOne);  // this is a known method

server.listen(7000, function () {     // takes two arguments: Port number, and a function
    console.log("Server listening on : http://localhost:7000");  
});

var handleRequestTwo = function(req, res) {            // request, response
    res.end("If I smelled like you smell even after a shower, I would live under a bridge indefinitely.");
};

var server = http.createServer(handleRequestTwo);  // this is a known method

server.listen(7500, function () {     // takes two arguments: Port number, and a function
    console.log("Server listening on : http://localhost:7500");  
});


