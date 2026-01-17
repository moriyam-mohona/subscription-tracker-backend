import express from "express";
import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";
import subscriptionRouter from "./routes/subscription.route.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
