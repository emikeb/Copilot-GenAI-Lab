/**
 * src/lib/publishers.ts
 *
 * Data-access helpers for the publishers table.
 *
 * This module exports functions that accept an injectable `db` client
 * (Database) so they can be tested independently and used at build time
 * in Astro frontmatter. Follow the conventions in
 * .github/copilot-instructions.md for file headers and TSDoc.
 */

import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Retrieve all publishers ordered by name.
 *
 * @param db - Drizzle Database client (injectable)
 * @returns Promise resolving to an array of Publisher objects (id and name)
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
	const rows = await db
		.select({ id: publishers.id, name: publishers.name })
		.from(publishers)
		.orderBy(asc(publishers.name));

	return rows;
}
