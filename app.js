const express = require('express')
const chalk = require('chalk')
const path = require('path')

const app = express()
const port = 3000

// Manage request
app.use(express.static(path.join(__dirname, '/public/')))
app.get("/", (req, res) => {
  res.send('Hello test')
})

app.listen(port, () => {
  console.log("Listening on port " + chalk.green(port))
})