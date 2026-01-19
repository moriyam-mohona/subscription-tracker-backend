import { Router } from "express";

import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) => {
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
