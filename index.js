require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require('mongoose');
const userRouter=require('./routes/user')
const productRouter=require('./routes/product')
const path=require('path')
const cors=require("cors")
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("mongoose connected successfuly")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan('default'))
// console.log(path.resolve(__dirname,process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
// console.log(userRouter)
server.use('/users',userRouter.router);
server.use('/products',productRouter.router);
server.use('*',(req,res)=>res.sendFile(path.resolve(__dirname,process.env.PUBLIC_DIR,'index.html')))

server.get('/demo', (req, res) => {
  // res.sendStatus(404);
  // res.json(products)
  // res.status(201).send('<h1>hello</h1>')
  // res.sendFile('/Users/abhishekrathore/Desktop/node-app/index.html')
});

server.listen(process.env.PORT, () => {
  console.log('server started on port :',process.env.PORT);
});