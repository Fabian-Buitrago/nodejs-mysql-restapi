import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "host",
  user: "user",
  password: "password",
  port: 3306,
  database: "database",
});
