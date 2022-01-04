//Express 
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

//Mongoose and Dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//Routes Import
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe");



//Database Connection 
mongoose.connect(
    process.env.MONGO_URL
    ).then( () => console.log("db Connection Successful")).catch((err)=> {console.log(err)
    });

    
 app.use(express.json());
 app.use("/api/auth", authRoute); 
 app.use("/api/users", userRoute); 
 app.use("/api/products", productRoute); 
 app.use("/api/carts", cartRoute); 
 app.use("/api/orders", orderRoute); 
 app.use("/api/checkout", stripeRoute);
 
 const port = process.env.PORT;
 app.listen(port || 5000 , () => {

    console.log(`Backend server is running on port ${port}!`);
});