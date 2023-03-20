const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/contact", (req,res,next)=>{
  res.send("contact page")
})

router.get("/about", (req,res,next)=>{
  res.send("about page")
})

module.exports = router;
