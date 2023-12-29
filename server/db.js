const mongoose = require("mongoose");


const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDb connected succesfully ");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports=connectToDb
