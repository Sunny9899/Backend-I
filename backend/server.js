//db.json is acting as database
//server.js is acting as server

const PORT=5000;

const path = require('path');

const jsonServer = require('json-server');// require same as import

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))// accessing our own created database

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api', router)// /api is where all api's are present
server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))