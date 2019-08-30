require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d5edeb68a484289a13cd91f

User.findByIdAndUpdate("5d5ef37e4e1d5c8e8365ed52", { age: 1 })
.then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
