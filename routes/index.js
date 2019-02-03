const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/checkout',(req,res)=>{
  releaseEvents.render("ckeckout")
})

module.exports = router;