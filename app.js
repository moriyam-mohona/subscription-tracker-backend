import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});

export default app;
