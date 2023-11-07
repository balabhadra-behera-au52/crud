const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favorite.controller");



router.post('/addfavorite/:id', favoriteController.addfavorite);
router.get('/addAllfavoriteusers/:id',favoriteController.getAllfavorite);


module.exports = router;