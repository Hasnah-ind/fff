const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name : {
            type: String
        },
        email : {
            type: String
        },
        phone :{
            type: String
        },
        alamat :{
            type: String
        }
    },
    {
        collection: "userData"
    }
    
    
);

module.exports  = mongoose.model("user", userSchema);
