
import { sql, createPool } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { usersTable } from "~/db/schema";
import { InsertUser } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const body: InsertUser = await readBody(event);
  const startTime = Date.now();
  const db = drizzle(
    process.env.PRODUCTION ? sql : createPool({ connectionString: process.env.POSTGRES_URL }),
  );
  const user = await db.insert(usersTable).values(body).returning();

  const duration = Date.now() - startTime;
  return {
    user: user,
    duration: duration,
  };
});
