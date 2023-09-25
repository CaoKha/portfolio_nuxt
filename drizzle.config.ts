import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://default:ka0mS1MygvDu@ep-square-recipe-18956957-pooler.eu-central-1.postgres.vercel-storage.com/verceldb?sslmode=require",
  },
} satisfies Config;
