export function parseCsvLine(line) {
  if (typeof line !== 'string') return [];
  const matches = line.match(/(?:\"[^\"]*\"|[^,])+/g);
  if (!matches) return [];
  return matches.map(m => m.trim().replace(/^\"|\"$/g, '').replace(/\"\"/g, '"'));
}
