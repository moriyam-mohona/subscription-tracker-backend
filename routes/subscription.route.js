import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({
    title: "Get all subscriptions",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: `Fetching subscription with ID: ${req.params.id}` });
});

subscriptionRouter.post("/subscriptions", (req, res) => {
  res.send({
    title: "Creating a new subscription",
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: `Updating subscription with ID: ${req.params.id}` });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: `Deleting subscription with ID: ${req.params.id}` });
});

subscriptionRouter.get("/user/:userId", (req, res) => {
  res.send({
    title: `Get subscriptions for user with ID: ${req.params.userId}`,
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: `Cancelling subscription with ID: ${req.params.id}` });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get upcoming renewals" });
});

export default subscriptionRouter;
