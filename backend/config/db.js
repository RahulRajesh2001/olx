import mongoose from "mongoose";

function mongoConnect(){
    mongoose.connect('mongodb://localhost:27017/olx').then((response)=>{
    console.log("Mongodb connected successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

export default mongoConnect;