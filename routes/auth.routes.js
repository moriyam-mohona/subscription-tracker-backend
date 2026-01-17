import e, { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  // Handle sign-up
  res.send({
    title: "User signed up successfully",
  });
});

authRouter.post("/login", (req, res) => {
  res.send({
    title: "User logged in successfully",
  });
});

authRouter.post("/logout", (req, res) => {
  res.send({
    title: "User logged out successfully",
  });
});

export default authRouter;
