const express = require('express')
const chalk = require('chalk')
const app = express()
const port = 3000

// Manage request
app.get("/", (req, res) => {
  res.send('Hello test')
})

app.listen(port, () => {
  console.log("Listening on port " + chalk.green(port))
})