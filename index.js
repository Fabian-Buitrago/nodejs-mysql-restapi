import express from "express";
import { pool } from "./db.js";

const app = express();

app.set("port", 3000);

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 'Pong' AS result");
  res.json(result[0]);
});

app.get("/employees", (req, res) => {
  res.send("getting employees");
});

app.post("/employees", (req, res) => {
  res.send("creating employees");
});

app.put("/employees", (req, res) => {
  res.send("updating employees");
});

app.delete("/employees", (req, res) => {
  res.send("removing employees");
});

app.listen(app.get("port"));
console.log(`Server running on port ${app.get("port")}`);
