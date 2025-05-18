const express = require("express");
const app = express();

require("dotenv").config();
const PORT =  process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.set('view engine' , 'ejs');




app.get("/" , (req,res) => {
  res.render("index");
});


app.listen(PORT , async (req , res) =>{
   await console.log(`Server running on port : ${PORT}`);
});


