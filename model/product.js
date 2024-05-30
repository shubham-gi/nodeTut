const mongoose=require("mongoose");
const Schema=mongoose.Schema
const productSchema=new Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String},
    price:{type:Number,min:[0,"price less than 0 not allowed"],required:true},
    discountPercentage:{type:Number,min:[0,"discount less than 0 not allowed"],max:[100,"discount more than 100 is not allowed"],required:true},
    rating:{type:Number,min:[0,"rating less than 0 not allowed"],max:[5,"rating more than 5 is not allowed"],default:0},
    brand:{type:String,required:true},
    category:String,
    thumbnail:{type:String,required:true},
    images:[String]
  })
exports.product=mongoose.model("product",productSchema)