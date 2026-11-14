export function parseSearchQuery(rawQuery) {
  const result = {
    keywords: [],
    exactPhrases: [],
    tags: [],
    filters: {},
  };

  if (!rawQuery || typeof rawQuery !== 'string') {
    return result;
  }

  const phraseRegex = /"([^"]+)"/g;
  let cleanQuery = rawQuery.replace(phraseRegex, (_, phrase) => {
    if (phrase.trim()) {
      result.exactPhrases.push(phrase.trim());
    }
    return '';
  });

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
