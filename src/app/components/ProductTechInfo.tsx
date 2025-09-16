import React from "react";
import { parseKeyValues, splitSentences, normalize, TechRow } from "../../utils/echInfo";


type Props = {
technicalInformation?: string; // e.g. "DILUIÇÃO\r\nATÉ 1:200\r\nPH\t3,5\r\nFRAGRÂNCIA\tFLORAL CÍTRICO"
technicalData?: string; // long paragraph with sentences
};


export default function ProductTechInfo({ technicalInformation, technicalData }: Props) {
const kv = parseKeyValues(technicalInformation);
const bullets = splitSentences(technicalData);


return (
<section className="space-y-6">
<header className="flex items-center gap-2">
{/* <span className="h-2 w-2 rounded-full bg-blue-500" /> */}
{/* <h2 className="text-lg font-semibold">Informações Técnicas</h2> */}
</header>


{kv.length > 0 && (
<dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border p-4 shadow-sm">
{kv.map((r, i) => (
<div key={i} className="grid grid-cols-[140px_1fr] gap-2">
<dt className="text-sm text-zinc-500">{r.label}</dt>
<dd className="font-medium">{r.value}</dd>
</div>
))}
</dl>
)}


{bullets.length > 0 && (
<div className="rounded-2xl border p-4 shadow-sm">
<h3 className="mb-2 text-sm font-semibold text-zinc-700">Detalhes do produto</h3>
<ul className="list-disc pl-6 space-y-1">
{bullets.map((t, i) => (
<li key={i}>{t}</li>
))}
</ul>
</div>
)}
</section>
);
}