import Database from 'better-sqlite3';
import { join } from 'path';
import { archiveData } from './archives';
import { generateId } from './utils';

// Initialize DB file in the project root
const db = new Database('batchzero.db', { verbose: console.log });

// Create Tables if they don't exist
const initDb = () => {
    const createExperiences = `
    CREATE TABLE IF NOT EXISTS experiences (
      id TEXT PRIMARY KEY,
      role TEXT,
      activityType TEXT,
      story TEXT,
      sentiment TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

    // Using a simple JSON store for the decade archive to keep it relational but flexible
    const createArchives = `
    CREATE TABLE IF NOT EXISTS archives (
       id TEXT PRIMARY KEY,
       year TEXT,
       title TEXT,
       story TEXT,
       image TEXT,
       outcome TEXT,
       sentimentScore REAL,
       data JSON
    )
  `;

    db.exec(createExperiences);
    db.exec(createArchives);

    // Seed Archives if empty
    const stmt = db.prepare('SELECT count(*) as count FROM archives');
    const row = stmt.get() as { count: number };

    if (row.count === 0) {
        console.log('Seeding Database with Decade Archives...');
        const insert = db.prepare(`
      INSERT INTO archives (id, year, title, story, image, outcome, sentimentScore, data)
      VALUES (@id, @year, @title, @story, @image, @outcome, @sentimentScore, @data)
    `);

        archiveData.forEach(item => {
            insert.run({
                id: item.id,
                year: item.year,
                title: item.title,
                story: item.story,
                image: item.image,
                outcome: item.outcome,
                sentimentScore: item.stats.sentimentScore,
                data: JSON.stringify(item)
            });
        });
    }
};

// Run initialization
initDb();

export default db;
