import express from "express";

const router = express.Router();

// Data - local DB
import users from "../DB/data.js";

// Default GET Route
router.get("/", (req, res) => {
    res.send(users);
});

// Default POST Route
router.post("/", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("POST route");
});

export default router;