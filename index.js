import express from "express";

const app = express();

app.set("port", 3000);

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
