const express = require("express");
const app = express();

const fs = require("fs");

const path = require("path");

require("dotenv").config();
const PORT =  process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.set('view engine' , 'ejs');

  app.set('trust proxy', true);



app.get("/" , async (req,res) => {
   const userIp = req.ip;
   const userpath  = path.join(__dirname , 'user/userip.txt');
  //  console.log(userpath);


 await fs.appendFile(userpath , `User IP : ${userIp}` , (err)=>{
    if(err){
      console.error('Error appending to file:', err);
    return;
    }

    console.log("User Data Saved Succesfully!");

   } )
  res.render("index" , {userIp :userIp });
});


app.listen(PORT , async (req , res) =>{
   await console.log(`Server running on port : ${PORT}`);
});


