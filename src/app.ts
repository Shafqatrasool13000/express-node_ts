import express from "express";
import bodyParser from "body-parser";

import connect from "./db/connect";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());

const start = async () => {
  try {
    await connect(process.env.MONGO_URI!);
    app.listen(5000, () => {
      console.log("Server Listening at Port 5000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
