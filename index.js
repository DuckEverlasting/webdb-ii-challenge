const express = require('express');
const helmet = require('helmet');

const server = express();

const zoosRouter = require('./routers/zoosRouter.js');
const bearsRouter = require('./routers/bearsRouter.js');

server.use(express.json());
server.use(helmet());

server.use('/api/zoos', zoosRouter)
server.use('/api/bears', bearsRouter)

// endpoints here

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
