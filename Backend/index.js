const express = require("express")
const app = express()
const cors = require('cors')
const port = 5000
const bodyparser = require("body-parser")

let students = ["Alin", "Kevin", "Eloi", "Jong", "Rebecca", "Bilal", "Marco", "Helene", "Karimou"]

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

//app.use(express.json()) plus besoin de body parser

app.get("/students", (req, res) => {
  res.json(students)
})

app.post("/students", (req, res) => {
  // console.log(req.body.name)

  students = [...students, req.body.name]
  res.json(students)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})