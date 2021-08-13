const express = require('express')
const { request, response } = require('../server')

const router = express.Router()
const users = require('../usecases/users')


router.get('/', async( request, response) =>{
 try {
   const allUsers = await users.getAll()
   response.status(200)
   response.json({
     succes:true,
     data:{
       users: allUsers
     }
   })   
 } catch (error) {
   response.status(400)
   response.json({
     succes: false,
     error: error.message
   })   
 }
})


router.post('/', async (request,response) =>{ 
 try {  
    const newUserData = request.body
    const newUser = await users.createUser(newUserData)
    //response.status(200)
    response.json({
      succes:true,
      data:{
        newUser
      }
    })
 } catch (error) {  
     // response.status(400)
     response.json({
       succes:false,
       error:error.message
     })
   
 }
})

router.patch('/:id', async(request,response) =>{
try {
  const newUserData = request.body
  const idUser = request.params.id
  const newUSer = await users.updateUser(idUser, newUserData)
  response.status(200)
  response.json({
    succes:true,
    data:{
      newUSer
    }
  })
  
} catch (error) {
  response.status(400)
  response.json({
    succes:false,
    error: error.message
  })
}
})

router.delete('/:id', async(request,response) =>{
 try {
   const deleteUserId = request.params.id
   const userDelete = await users.deleteUser(deleteUserId)
   response.status(200)
   response.json({
     succes: true,
     data:{
       userDelete
     }
   })
 } catch (error) {
   response.status(400)
   response.json({
     succes:false,
    error: error.message
   })
 }
})

module.exports = router