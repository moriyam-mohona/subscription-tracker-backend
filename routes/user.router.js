import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({
    title: "Fetching all users",
  });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: `Fetching user with ID: ${req.params.id}` });
});

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
