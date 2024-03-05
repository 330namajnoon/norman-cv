const {Server} = require("sm-express-server");

const server = new Server(4000, "/dist/");

server.addControllers([]);

server.start(() => {
    console.log(`server is up on port ${4000}!`);
})