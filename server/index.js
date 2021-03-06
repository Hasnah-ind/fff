const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
const userModel = require("./model/User")

app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb+srv://keya:password123456@cluster0.zn5uq.mongodb.net/user?retryWrites=true&w=majority", 
    {
        useNewUrlParser : true,
    }
    );

app.post('/insert', async (req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const alamat = req.body.alamat;

  const user = new userModel({name : name, email: email, phone: phone, alamat: alamat});
    res.send('inserted')
  try {
      await user.save();
  }catch (err){
      console.log(err);
  }
});

app.get('/read', async (req,res)=>{
  userModel.find({}, (err, result)=>{
      if(err){
          res.send(err);
      }
      res.send(result);
  });
});


app.listen(4000, () =>{
    console.log("Server berjalan di port 4000");
} );
