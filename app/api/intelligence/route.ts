import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    // Simulate DB Latency
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
        // Fetch from SQLite (In MVP, we treat the 'Archives' as the primary insight source)
        // In a real production app, this would be a complex join of 'experiences' and generated 'insights'
        const stmt = db.prepare('SELECT data FROM archives');
        const rows = stmt.all() as { data: string }[];

        let insights: any[] = [];

        if (rows.length > 0) {
            insights = rows.map(row => JSON.parse(row.data)).map(item => ({
                id: item.id,
                title: item.title,
                description: item.story,
                type: item.outcome.includes('Failure') ? 'Risk' : 'Opportunity',
                confidence: item.stats.sentimentScore,
                relatedClusterIds: item.tags.map((t: string) => t.toLowerCase())
            }));
        }

        return NextResponse.json({
            success: true,
            data: insights
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
    }
}
