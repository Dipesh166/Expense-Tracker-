const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

require("dotenv").config();
const db = require("./db/db.js"); // Assuming db.js connects to a database

const app = express();
const PORT = process.env.PORT || 3000; // Fallback port

// Middlewares
app.use(express.json());
app.use(cors());

// Routes - Automatically load all routes in the routes directory
readdirSync("./routes").map((routeFile) => 
  app.use("/api", require(`./routes/${routeFile}`))
);

// 404 Route Handler (optional)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
const server = () => {
  app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
  });
};

server();
