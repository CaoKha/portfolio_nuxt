import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({path: './.env.development.local'});

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.POSTGRES_URL + "?sslmode=require",
  },
} satisfies Config;
