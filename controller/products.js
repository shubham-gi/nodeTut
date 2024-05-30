const model = require("../model/product");
const Product = model.product;
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
    });
    const response = await product.save();
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error:error.message });
  }
};

exports.getProducts = async(req, res) => {
  try {
    const products=await Product.find();
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }

};
exports.getProduct = async(req, res) => {
  try {
    const id = req.params.id;
    const product=await Product.findById(id);
    res.status(200).json(product)
    
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error);
  }
  res.json(product);
};
exports.updateProduct =async (req, res) => {
  try {
    const id = req.params.id;
    const response=await Product.findByIdAndUpdate(id,req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }
};
exports.replaceProduct = async(req, res) => {
  try {
    const id = req.params.id;
    const response=await Product.findOneAndReplace({_id:id},req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }
};
exports.deleteProduct = async(req, res) => {
  try {
    const id = req.params.id;
    const response=await Product.findOneAndDelete({_id:id},req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }
};
