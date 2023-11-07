const { AppSync } = require("aws-sdk");
const favoriteModel = require("../models/favoriteSchema")
const mongoose = require("mongoose");

module.exports = {
    addfavorite:async(req,res)=>{
        try {
         
                const favorite = new favoriteModel({
                    UserId:req.params.id,
                    ProductId:req.body.ProductId
                })
                await favorite.save();

            res.status(200).json({succes:"save favorite succesfully"});
        } catch (error) {
             console.log(error);
            res.status(400).json({result:"error"});
        }
    },
    addAllfavorite:async(req,res)=>{

        try {

            const favorite = await favoriteModel.findOne(req.params.id);
             await favorite.save();
        } catch (error) {
            console.log(error);
            res.status(400).json({result:"error"})
        }
    }
}