const router = require('express').Router() //parenthesis needed
const Product = require('../models/Product')


//mostrar el carrito
router.get('/', (req, res)=>{
  const {cart} = req.app.locals
  Product.find({_id:{$in:Object.keys(cart)}})
    .then(products=>{
      console.log(products)
      let total = 0
      products = products.map(p=>{
        total += p.price * cart[p._id]
        let product = {
          product:p,
          quantity:cart[p._id]
        }
        return product
      })
      res.render('cart',{products, total})
    }).catch(e=>res.render('error'))

})


router.post('/add', (req, res)=>{
  const {cart} = req.app.locals
  const {productId} = req.body
  cart[productId] ? cart[productId]++ : cart[productId] = 1
  console.log(cart)
  res.redirect('back')
})

//restar

//router.post('/rest', (req, res)=>{
  //const {cart} = req.app.locals
  //const {productId} = req.body
  //cart[productId] ? cart[productId]-- : cart[productId] = 1
  //console.log(cart)
//res.redirect('back')
//})



module.exports = router