import express from "express";
import cors from "cors";

import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", async (req, res) => {
  // Simple status system to check if the server is running
  res.status(200).json("Server is running.");
  console.log("Server is running.");
});

app.use("/", router);

app.listen(3001, () => {
  console.log("------------ SERVER RUNNING ON PORT 3001 ------------");
});
