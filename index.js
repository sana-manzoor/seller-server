//importing json-server dependency/package
const jsonServer=require('json-server')

//create server
const server=jsonServer.create()

//create middleware
const middleware=jsonServer.defaults()

//initialising router with resource
const router=jsonServer.router('db.json')

//implementing middleware to server
server.use(middleware)

//implementing router to server
server.use(router)

//defining port number
const PORT=process.env.PORT || 5000

//activating server into listening for requests
server.listen(PORT,()=>{
    console.log("server is running on port:",PORT )
})