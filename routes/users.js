import express from "express";

// local
import { getUsers, createUser, getUser, deleteUser, patchUser } from '../controlers/users.js';

const router = express.Router();

// Default GET Route
router.get("/", getUsers);

// Default POST Route
router.post("/", createUser);

// Get a Single User
router.get("/:id", getUser);

// Remove a Specified User
router.delete("/:id", deleteUser);

// Modify a Specified User Details
router.patch("/:id", patchUser);

export default router;