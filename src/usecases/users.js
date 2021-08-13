const Users = require('../models/user')

//get users
function getAll () {
 return Users.find()
}

//create user
function createUser(userData){
return Users.create(userData)
}

function updateUser (id, data) {
  return Users.findByIdAndUpdate(id,data, {new : true})
}

function deleteUser(id) {
  return Users.findByIdAndRemove({_id:id})
}

module.exports= {
  getAll,
  createUser,
  updateUser,
  deleteUser
}