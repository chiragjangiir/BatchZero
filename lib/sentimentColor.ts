import { Sentiment } from '../types';

export function getSentimentBadgeClass(sentiment: Sentiment): string {
  switch (sentiment) {
    case 'Positive':
    case 'Excited':
      return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    case 'Negative':
    case 'Frustrated':
      return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
    case 'Neutral':
    default:
      return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
  }
}
