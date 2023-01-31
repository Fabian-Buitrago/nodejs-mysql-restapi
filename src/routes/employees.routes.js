import { Router } from "express";

const router = Router();

router.get("/employees", (req, res) => {
  res.send("getting employees");
});

router.post("/employees", (req, res) => {
  res.send("creating employees");
});

router.put("/employees", (req, res) => {
  res.send("updating employees");
});

router.delete("/employees", (req, res) => {
  res.send("removing employees");
});

export default router;
