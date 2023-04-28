import mongoose from "mongoose";

class DB {
  static URI = process.env.MONGO_URI as string;

  constructor() {}

  connect = async () => {
    mongoose.connect(DB.URI, {
      dbName: "scanned",
      autoIndex: true,
      autoCreate: true,
    });
    return mongoose.connection;
  };
}

export default DB;
