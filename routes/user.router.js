import { Router } from "express";

import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);

userRouter.post("/", authorize, (req, res) => {
  res.send({
    title: "Creating a new user",
  });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: `Updating user with ID: ${req.params.id}` });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: `Deleting user with ID: ${req.params.id}` });
});

export default userRouter;
