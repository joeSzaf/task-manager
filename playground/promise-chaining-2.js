require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete("5d5c5d3874d070669b696363")
.then((task) => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
