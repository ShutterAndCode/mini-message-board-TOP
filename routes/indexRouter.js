import { Router } from "express";
import messages from "../messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: `mini-message-board-updated`,
    messages,
  });
});

indexRouter.get("/messages/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) { 
    return res.status(404).send("Message not found");
  }
  res.render("message", {
    message,
  });
});

export default indexRouter;
