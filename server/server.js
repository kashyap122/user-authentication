require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/Mongo.database");

const authRoutes = require("./routes/Auth.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "User Authentication" });
});

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🟢 Server running on http://localhost:3000/`));
