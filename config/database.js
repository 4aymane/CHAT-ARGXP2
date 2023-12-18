const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
  } catch (err) {
    console.error("MongoDB connection error: ", err)
    process.exit(1) // Exit process with failure
  }
}

module.exports = { connectDB }
