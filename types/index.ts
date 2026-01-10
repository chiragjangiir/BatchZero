export type Sentiment = 'Positive' | 'Neutral' | 'Negative' | 'Frustrated' | 'Excited';

export type Experience = {
  id: string;
  userId: string; // Anonymous ID usually
  role: string; // e.g., "Organizer", "Participant", "Sponsor"
  activityType: string; // e.g., "Hackathon", "Placement Drive", "Club Event"
  story: string; // The core narrative
  sentiment: Sentiment;
  tags: string[]; // Auto-generated later
  timestamp: Date;
};

export type Insight = {
  id: string;
  title: string;
  description: string;
  type: 'Risk' | 'Opportunity' | 'Trend';
  confidence: number;
  relatedClusterIds: string[];
};

export type Cluster = {
  id: string;
  name: string; // e.g., "Sponsorship Dropouts"
  size: number;
  sentimentScore: number; // -1 to 1
  keyKeywords: string[];
};
