import mongoose from "mongoose"


const MongoDb = process.env.NEXT_PUBLIC_MONGO_URI as string
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
