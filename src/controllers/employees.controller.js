import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const createEmployee = async (req, res) => {
  //Validate data and type
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?,?)",
    [name, salary]
  );
  res.send({ id: rows.insertId, name, salary });
};

export const updateEmployee = (req, res) => {
  res.send("updating employees");
};

export const deleteEmployee = (req, res) => {
  res.send("removing employees");
};
