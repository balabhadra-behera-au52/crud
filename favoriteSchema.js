const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favoriteSchema = Schema({

      UserId: {
            type: mongoose.Types.ObjectId,
            require: true,

      },
      ProductsId: [{
            type: mongoose.Types.ObjectId,
            require: true,
      }],


});
const favorite = mongoose.model('favorite', favoriteSchema);
module.exports = favorite;