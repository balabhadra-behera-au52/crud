const mongoose = require("mongoose");
const userShema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        uniqe:true,
    },

    lastname:{
        type:String,
    },

    email:{
        trype:String,
    },

    password:{
        type:String,
    },

});

module.exports = mongoose.model('user',userShema);