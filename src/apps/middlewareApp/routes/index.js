import express from "express";

const router = express.Router();

router.get("/ping1", (req, res) => res.send("middleware pong"));

export default router;
