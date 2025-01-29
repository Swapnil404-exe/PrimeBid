import mongoose from "mongoose";
import "dotenv/config";
export const connection = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`, {
      dbName: `${process.env.DB_NAME}`,
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
