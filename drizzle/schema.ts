import { pgTable, uniqueIndex, serial, text, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	image: text("image").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
	role: text("role").notNull(),
},
(table) => {
	return {
		uniqueIdx: uniqueIndex("unique_idx").on(table.email),
	}
});