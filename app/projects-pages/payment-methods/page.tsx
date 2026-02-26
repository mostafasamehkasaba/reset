"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";

const methods = [
  { id: 1, name: "ط§ظ„ط¨ظ†ظƒ ط§ظ„ظˆط·ظ†ظٹ", payments: 1, total: "OMR 20", desc: "ط§ط­ظ…ط¯ 1233456789" },
  { id: 2, name: "ط¨ط§ظٹط¨ط§ظ„", payments: 3, total: "USD 140", desc: "ظ„ط§ ظٹظˆط¬ط¯" },
];

export default function PaymentMethodsPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);
  const filteredMethods = useMemo(() => {
    const q = query.trim();
    if (!q) return methods;
    return methods.filter(
      (method) =>
        method.name.includes(q) ||
        method.desc.includes(q) ||
        method.total.includes(q) ||
        String(method.id).includes(q)
    );
  }, [query]);
  const selectedMethod = useMemo(
    () => methods.find((method) => method.id === openId) ?? null,
    [openId]
  );

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800">
      <header className="bg-brand-900 text-white shadow-sm" dir="ltr">
        <div className="flex h-14 w-full items-center justify-between px-6">
          <div className="flex items-center gap-3 text-slate-200">
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="ط§ظ„طµظپط­ط© ط§ظ„ط±ط¦ظٹط³ظٹط©">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M6 10v10h12V10" />
              </svg>
            </button>
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="ط§ظ„ظ…ط³طھط®ط¯ظ…">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c1.8-3 5-4.5 7.5-4.5s5.7 1.5 7.5 4.5" />
              </svg>
            </button>
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="ط§ظ„ظ‚ط§ط¦ظ…ط© ط§ظ„ط±ط¦ظٹط³ظٹط©">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="text-right text-base font-semibold">ظپط§طھظˆط±ط©+</div>
        </div>
      </header>

      <div className="flex w-full gap-5 px-6 py-6" dir="ltr">
        <main className="flex-1 space-y-4" dir="rtl">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-right text-lg font-semibold text-slate-700">ط§ظ„ظˆط³ط§ط¦ظ„</div>
            <div className="flex items-center gap-2">
              <Link
                href="/projects-pages/payment-methods/new"
                className="rounded-full bg-brand-900 px-4 py-2 text-sm text-white"
              >
                ط¬ط¯ظٹط¯ +
              </Link>
              <div className="flex items-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                <span className="grid h-10 w-10 place-items-center bg-emerald-500 text-white">ًں”چ</span>
                <input
                  className="h-10 w-44 px-3 text-sm outline-none"
                  placeholder="ط¨ط­ط«"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-right text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-3 py-3 text-center">#</th>
                    <th className="px-3 py-3 text-right">ط§ظ„ط§ط³ظ…</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ط¯ظپط¹ط§طھ</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ظ…ط¬ظ…ظˆط¹</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ظˆطµظپ</th>
                    <th className="px-3 py-3 text-center" aria-label="ط§ظ„ط¥ط¬ط±ط§ط،ط§طھ">â€¦</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMethods.map((method, index) => (
                    <tr key={method.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-3 text-center text-slate-700">{method.id}</td>
                      <td className="px-3 py-3 text-right font-semibold text-slate-800">{method.name}</td>
                      <td className="px-3 py-3 text-center text-slate-700">{method.payments}</td>
                      <td className="px-3 py-3 text-center font-semibold text-emerald-700">{method.total}</td>
                      <td className="px-3 py-3 text-center text-slate-600">{method.desc}</td>
                      <td className="px-3 py-3 text-center text-slate-500">
                        <button
                          className="rounded-full p-1 hover:bg-slate-200"
                          aria-label="ط®ظٹط§ط±ط§طھ"
                          type="button"
                          onClick={() => setOpenId(method.id)}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <circle cx="12" cy="5" r="1.6" />
                            <circle cx="12" cy="12" r="1.6" />
                            <circle cx="12" cy="19" r="1.6" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <Sidebar activeLabel="ظˆط³ط§ط¦ظ„ ط§ظ„ط¯ظپط¹" />
      </div>

      {selectedMethod && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl" dir="rtl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">ط¥ط¬ط±ط§ط،ط§طھ ط§ظ„ظˆط³ظٹظ„ط©</p>
                <p className="text-xs text-slate-500">{selectedMethod.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
                aria-label="ط¥ط؛ظ„ط§ظ‚"
              >
                âœ•
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <a
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center text-slate-600 hover:bg-slate-50"
                href="/projects-pages/payment-methods/view"
              >
                ط¹ط±ط¶
              </a>
              <a
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center text-slate-600 hover:bg-slate-50"
                href="/projects-pages/payment-methods/new"
              >
                طھط¹ط¯ظٹظ„
              </a>
              <button
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-600 hover:bg-slate-50"
                type="button"
                onClick={() => alert("طھظ… ظ†ط³ط® ط§ظ„ظˆط³ظٹظ„ط© (ظˆط§ط¬ظ‡ط© ظپظ‚ط·)")}
              >
                ظ†ط³ط®
              </button>
              <button
                className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-rose-700 hover:bg-rose-100"
                type="button"
                onClick={() => {
                  alert("طھظ… ط­ط°ظپ ط§ظ„ظˆط³ظٹظ„ط© (ظˆط§ط¬ظ‡ط© ظپظ‚ط·)");
                  setOpenId(null);
                }}
              >
                ط­ط°ظپ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
