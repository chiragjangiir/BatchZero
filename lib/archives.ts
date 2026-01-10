import { Experience } from '@/types';

export const archiveData = [
    {
        id: 'archive_2016',
        year: '2016',
        title: 'The Great WiFi Collapse',
        image: '/images/2016.png',
        story: "Top-tier hackathon. 500 hackers. The organizers bought consumer-grade routers. At 2 PM, the network crashed. We learned: Always budget for enterprise switches.",
        outcome: 'Failure -> Policy Change',
        tags: ['Infrastructure', 'Logistics', 'Critical Failure'],
        stats: {
            participants: 520,
            projectsSubmitted: 12,
            sentimentScore: 0.2
        }
    },
    {
        id: 'archive_2020',
        year: '2020',
        title: 'The Lonely Deployment',
        image: '/images/2020.png',
        story: "First fully remote hackathon. Coding solo in dark rooms. Engagement dropped by 40% because we didn't force camera-on social hours. We learned: Remote needs forced serendipity.",
        outcome: 'Insight -> New Protocol',
        tags: ['Remote', 'Mental Health', 'Engagement'],
        stats: {
            participants: 800,
            projectsSubmitted: 156,
            sentimentScore: 0.45
        }
    },
    {
        id: 'archive_2024',
        year: '2024',
        title: 'The Agents Era',
        image: '/images/2024.png',
        story: "AI Agents dominated. The winning team wasn't the best coders, but the best prompters. We learned: Judge criteria must update to value 'Orchestration' over 'Syntax'.",
        outcome: 'Success -> Pivot',
        tags: ['AI', 'Strategy', 'Future'],
        stats: {
            participants: 1200,
            projectsSubmitted: 400,
            sentimentScore: 0.92
        }
    }
];
