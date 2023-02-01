import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.set("port", 3000);

app.use(express.json());

app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(500).json({
    message: "endpoint not found",
  });
});

app.listen(app.get("port"));
console.log(`Server running on port ${app.get("port")}`);
