import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const snapshots=sqliteTable('snapshots',{userId:text('user_id').primaryKey(),payload:text('payload').notNull(),revision:integer('revision').notNull(),updatedAt:text('updated_at').notNull()});
