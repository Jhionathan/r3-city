export type TechRow = { label: string; value: string };


const BR = /\r?\n/g;


export function normalize(s?: string) {
return (s ?? "").replace(BR, "\n").replace(/\s+/g, " ").trim();
}


// Split lines, accept "KEY VAL" or "KEY: VAL"; keeps lines without ":" as bullets under a synthetic label
export function parseKeyValues(text?: string): TechRow[] {
const rows: TechRow[] = [];
const lines = (text ?? "").replace(BR, "\n").split("\n").map(l => l.trim()).filter(Boolean);
for (const line of lines) {
const m = line.match(/^(.*?)[\:\-\–]\s*(.+)$/);
if (m) rows.push({ label: titleCase(m[1]), value: m[2] });
else rows.push({ label: "Detalhe", value: line });
}
// dedupe consecutive equal labels
return rows.reduce<TechRow[]>((acc, r, i) => {
const prev = acc[acc.length - 1];
if (prev && prev.label === r.label && prev.value === r.value) return acc;
acc.push(r); return acc;
}, []);
}


export function splitSentences(s?: string) {
return normalize(s).split(/\.(?=\s|$)/).map(t => t.trim()).filter(Boolean);
}


function titleCase(s: string) {
return s.toLowerCase().replace(/(^|\s)([a-zãâáàéêíóôõúç])/g, (_, sp, c) => sp + c.toUpperCase());
}