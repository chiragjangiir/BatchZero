export function generateCsv(headers, rows) {
  const escapeCell = (val) => {
    const s = String(val).replace(/"/g, '""');
    return `"${s}"`;
  };
  const headerLine = headers.map(escapeCell).join(',');
  const rowLines = rows.map((r) => r.map(escapeCell).join(','));
  return [headerLine, ...rowLines].join('\n');
}
