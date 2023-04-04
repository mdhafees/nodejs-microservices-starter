import express from "express";

const router = express.Router();

router.get("/ping2", (req, res) => res.send("serviceHaf pong"));

export default router;
