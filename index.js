import express from "express";

// local
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Homepage");
});

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));