const express = require('express')
const productsRouter = express.Router()

productsRouter.route('/').get((req, res) => {
  // res.send('Product page!')
  res.render('products', {
    title: "Products",
    customers: [
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
productsRouter.route('/:id').get((req, res) => {
  const id = req.params.id

  res.send("This is product " + id)
})

module.exports = productsRouter