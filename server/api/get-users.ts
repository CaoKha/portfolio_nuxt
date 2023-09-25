import { sql, createPool } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { usersTable } from "~/db/schema";
import type { SelectUser, InsertUser } from "~/db/schema";

export default defineEventHandler(async () => {
  const startTime = Date.now();
  const db = drizzle(
    process.env.PRODUCTION ? sql : createPool({ connectionString: process.env.POSTGRES_URL }),
  );
  let users: SelectUser[] = await db.select().from(usersTable);
  const duration = Date.now() - startTime;
  return {
    users: users,
    duration: duration,
  };
});
