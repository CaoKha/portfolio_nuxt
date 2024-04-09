import { serial, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image").notNull(),
    role: text("role").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => ({
    uniqueIdx: uniqueIndex("unique_idx").on(users.email),
  }),
);

export type SelectUser = typeof usersTable.$inferSelect
export type InsertUser = typeof usersTable.$inferInsert;
