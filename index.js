require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require ('./src/server')
const port = 8080 || 3000

dbConnect()
.then(() =>{
  console.log('DB connected')
  server.listen(port, () =>{
    console.log(`server is listening in port ${port}`)
  })  
}).catch(error =>{
  console.error('Error',error)
})