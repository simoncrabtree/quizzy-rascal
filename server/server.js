var Hapi = require('hapi');
var Boom = require('boom')
var Inert = require('inert')
var Nes = require('nes');
var config = require('./package.json');
var port = process.env.port || 1337;
var uuid = require('node-uuid');

var teams = {}
var quizmaster = {}

var server = new Hapi.Server();
server.connection({
  port: port
});

server.register(Inert, () => {});
server.register(Nes, () => {});


var getInfo = function (request, reply) {
	reply({version: config.version});
}

var login = function(request, reply) {
  //TODO: Check teamname not already taken
  var token = uuid.v4();
  var teamName = request.payload.teamName;

  teams[token] = {name: teamName, score: 0}

  reply({
    token: token,
    teamName: teamName
  })

  server.broadcast({
    type: "NEW_QUESTION",
    question: "How many times have Manchester United won The Champions League (or European Cup)?"
  })
}

var quizmasterlogin = function(request, reply) {
  if(request.payload.password !== 'password')
    return reply(Boom.badRequest)

  quizmaster.token = uuid.v4()
  return reply({token: quizmaster.token})
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
  method: 'POST',
  path: "/quizmasterlogin",
  handler: quizmasterlogin
});

server.route({
  method: 'GET',
  path: "/teams",
  handler: function(request, reply) {
    reply(teams)
  }
});

server.route({
  method: 'GET',
  path: '/team',
  handler: function(request, reply) {
    var teamToken = request.headers.teamtoken

    if(teams[teamToken])
      return reply(teams[teamToken])

    return reply(Boom.notFound())
  }
});

server.start(function (err) {
	if(err)
		console.log("ERROR starting server:", err);

	console.log("Server listening on port", port);
});
