const express = require('express')
const chalk = require('chalk')
const path = require('path')
const productsRouter = require('./src/router/productRouter')

const app = express()
const port = process.env.PORT

// Manage request
app.use(express.static(path.join(__dirname, '/public/')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {
  // res.send('Hello test')

  // Render ejs format
  res.render('index', {
    username: "Test EJS",
    users: [
      {
        name: "Midoriya",
        age: 16
      },
      {
        name: "All Might",
        age: 30
      },
      {
        name: "Nejire",
        age: 18
      }
    ]
  })
})

app.listen(port, () => {
  console.log("Listening on port " + chalk.green(port))
})