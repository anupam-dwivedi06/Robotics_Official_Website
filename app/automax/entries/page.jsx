"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { registrationFields, workshops } from "../workshopData";

function downloadExcel(entries) {
  const columns = ["workshop", ...registrationFields.map((field) => field.name), "imageUrl", "submittedAt"];
  const escapeCell = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const header = columns.map((column) => `<th>${escapeCell(column)}</th>`).join("");
  const rows = entries.map((entry) => `<tr>${columns.map((column) => `<td>${escapeCell(column === "submittedAt" ? new Date(entry[column]).toLocaleString() : entry[column])}</td>`).join("")}</tr>`).join("");
  const blob = new Blob([`\ufeff<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`], { type: "application/vnd.ms-excel" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "automax-workshop-entries.xls";
  link.click();
  URL.revokeObjectURL(url);
}

export default function EntriesPage() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/registrations")
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Could not load registrations.");
        setEntries(result);
      })
      .catch((loadError) => setError(loadError.message));
  }, []);

  const visibleEntries = useMemo(() => filter === "all" ? entries : entries.filter((entry) => entry.workshop === workshops[filter].name), [entries, filter]);

  return (
    <main className="min-h-screen bg-[#080b17] px-5 pb-20 pt-32 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><Link href="/automax" className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 hover:text-white">Back to AutoMax 5.0</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-300">Registration dashboard</p><h1 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">Workshop entries</h1><p className="mt-3 text-slate-400">{visibleEntries.length} registration{visibleEntries.length === 1 ? "" : "s"} shown</p></div>
          <div className="flex flex-wrap gap-3"><select value={filter} onChange={(event) => setFilter(event.target.value)} className="border border-white/15 bg-[#11182a] px-4 py-3 text-sm text-white outline-none"><option value="all">All workshops</option><option value="aero">Aero-Drone</option><option value="ai">AI Robotics</option></select><button onClick={() => downloadExcel(visibleEntries)} disabled={!visibleEntries.length} className="bg-cyan-300 px-4 py-3 text-sm font-black uppercase tracking-wider text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Download Excel</button></div>
        </div>
        {error && <p role="alert" className="mb-5 border border-red-300/30 bg-red-950/30 px-5 py-4 text-sm text-red-200">{error}</p>}
        <div className="overflow-x-auto border border-white/10 bg-[#11182a]"><table className="w-full min-w-[1200px] text-left text-sm"><thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400"><tr><th className="px-5 py-4">Workshop</th>{registrationFields.map((field) => <th key={field.name} className="px-5 py-4">{field.label}</th>)}<th className="px-5 py-4">Payment image</th><th className="px-5 py-4">Submitted</th></tr></thead><tbody>{visibleEntries.map((entry) => <tr key={entry.id} className="border-b border-white/5 align-top last:border-0"><td className="px-5 py-4 font-bold text-cyan-200">{entry.workshop}</td>{registrationFields.map((field) => <td key={field.name} className="max-w-[220px] px-5 py-4 text-slate-300">{entry[field.name]}</td>)}<td className="px-5 py-4"><a href={entry.imageUrl} target="_blank" rel="noreferrer" className="font-semibold text-cyan-300 hover:text-white">Open image</a></td><td className="whitespace-nowrap px-5 py-4 text-slate-400">{new Date(entry.submittedAt).toLocaleString()}</td></tr>)}{!visibleEntries.length && <tr><td colSpan={registrationFields.length + 3} className="px-5 py-16 text-center text-slate-500">No registrations saved yet.</td></tr>}</tbody></table></div>
      </div>
    </main>
  );
}