/**
 * Search tokenizer and filter parser for campus knowledge queries.
 * Supports quoted terms, tag prefixes (#tag), and role filters (role:student).
 */

export interface ParsedSearchQuery {
  keywords: string[];
  exactPhrases: string[];
  tags: string[];
  filters: Record<string, string>;
}

export function parseSearchQuery(rawQuery: string): ParsedSearchQuery {
  const result: ParsedSearchQuery = {
    keywords: [],
    exactPhrases: [],
    tags: [],
    filters: {},
  };

  if (!rawQuery || typeof rawQuery !== 'string') {
    return result;
  }

  // 1. Extract double-quoted exact phrases
  const phraseRegex = /"([^"]+)"/g;
  let cleanQuery = rawQuery.replace(phraseRegex, (_, phrase) => {
    if (phrase.trim()) {
      result.exactPhrases.push(phrase.trim());
    }
    return '';
  });

  // 2. Tokenize whitespace-separated terms
  const tokens = cleanQuery.split(/\s+/).filter(Boolean);

  for (const token of tokens) {
    if (token.startsWith('#') && token.length > 1) {
      result.tags.push(token.substring(1).toLowerCase());
    } else if (token.includes(':')) {
      const [key, value] = token.split(':');
      if (key && value) {
        result.filters[key.toLowerCase()] = value.toLowerCase();
      }
    } else {
      result.keywords.push(token.toLowerCase());
    }
  }

  return result;
}
