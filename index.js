// import express
const express=require('express')
require('dotenv').config()
require('./connection/connection')
const cors=require('cors')

const router=require('./routes/routes')


// server creation
const server=express()



// use
server.use(cors())

server.use(express.json())
server.use('/packageimage',express.static('./uploads'))
server.use(router)

const port=4005 || process.env.port
server.listen(port,()=>{
    console.log(`------course server start at the port ${port}------`);
})


