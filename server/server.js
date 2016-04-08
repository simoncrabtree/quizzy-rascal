var Hapi = require('hapi');
var config = require('./package.json');
var port = process.env.port || 1337;

var teams = {}

var server = new Hapi.Server();
server.connection({
	port: port
});

var getInfo = function (request, reply) {
	reply({version: config.version});
}

var login = function(request, reply) {
  var teamName = request.payload.teamName
  if(!teams[teamName])
    teams[teamName] = {score: 0}

  reply({
    id: "1234",
    teamName: teamName
  })
}

server.route({
	method: "GET",
	path: "/{path*}",
	handler:  {
 		directory: {
      path: './public',
      listing: false,
      index: true
    }
  }
});

server.route({
  method: 'GET',
  path: "/info",
  handler: getInfo
});

server.route({
	method: 'POST',
	path: "/login",
	handler: login
});

server.route({
  method: 'GET',
  path: "/teams",
  handler: function(request, reply) {
    reply(teams)
  }
});

server.start(function (err) {
	if(err)
		console.log("ERROR starting server:", err);

	console.log("Server listening on port", port);
});
