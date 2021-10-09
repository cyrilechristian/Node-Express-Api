import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));