import { NextResponse } from 'next/server';
import { generateId } from '@/lib/utils';
import db from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { role, activityType, story, sentiment } = body;

        // Simulate "Processing" time (Embedding generation)
        await new Promise(resolve => setTimeout(resolve, 500));

        const id = generateId();
        const stmt = db.prepare(`
            INSERT INTO experiences (id, role, activityType, story, sentiment)
            VALUES (?, ?, ?, ?, ?)
        `);

        stmt.run(id, role, activityType, story, sentiment);

        console.log('[MEMORY_BANK] Ingested to SQLite:', id);

        return NextResponse.json({
            success: true,
            message: 'Experience embedded and prioritized.',
            data: { id, role, story }
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Ingestion Failed' }, { status: 500 });
    }
}
