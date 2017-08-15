const detect = require("detect-port");

var server = require("http").createServer();
var io = require("socket.io")(server);

const port = 3000;

detect(port, (err, _port) => {
  if (err) {
    console.log(err);
  }

  if (port !== _port) {
    console.log("Run in client only mode.");
  } else {
    io.on("connection", function(client){
      client.on("event", function(data){});
      client.on("disconnect", function(){});
    });
    server.listen(3000);
  }
})
