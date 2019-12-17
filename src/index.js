const express = require('express')
require("./db/mongoose")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000


const multer = require('multer')
const upload = multer({
  dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is up on " + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5dbcdf354a23224da952e6c5')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner.name)

  const user = await User.findById('5dbcdebcdf550e4d4ec219d0')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()
