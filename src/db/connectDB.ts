import mongoose from "mongoose"


const MongoDb = "mongodb+srv://rajapandi12121997:rp12121997@todoapp.usb49qn.mongodb.net/todoapp"
export const connectDb = async () => {
  try {
    await mongoose.connect(MongoDb)
    console.log('db success connect')
  } catch (err) {
    console.log('error connecting to database')
    console.log(err)
    process.exit(1)
  }
}
