"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

const items = [
  { id: 1, name: "ط§ط¹ط¯ط§ط¯ ظˆظˆط±ط¯ط¨ط±ظٹط³", price: 20, qty: 1, total: "USD 20" },
  { id: 2, name: "طھطµظ…ظٹظ… ظ…ظˆظ‚ط¹", price: 30, qty: 1, total: "USD 30" },
  { id: 3, name: "ط§ط¹ط¯ط§ط¯ ط³ظٹط±ظپط±", price: 20, qty: 1, total: "USD 20" },
];

export default function InvoiceViewPage() {
  const [modal, setModal] = useState<"email" | "link" | null>(null);
  const shareLink = "invoices/24090600033";

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
            <div className="text-right text-lg font-semibold text-slate-700">
              ط±ظ‚ظ… ط§ظ„ظپط§طھظˆط±ط©: 24090600033
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-full bg-emerald-500 px-4 py-2 text-sm text-white"
              >
                طھظ†ط²ظٹظ„ ظ…ظ„ظپ PDF
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full bg-brand-900 px-4 py-2 text-sm text-white"
              >
                ط·ط¨ط§ط¹ط©
              </button>
              <button
                type="button"
                onClick={() => setModal("email")}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                ط¥ط±ط³ط§ظ„ ط¨ط§ظ„ط¨ط±ظٹط¯
              </button>
              <a
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                href="/projects-pages/payment-methods"
              >
                طµظپط­ط© ط§ظ„ط¯ظپط¹
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] rounded-md border-2 border-sky-400/80 px-6 py-3 text-lg font-semibold text-sky-500/80">
              طھظ… ط§ظ„ط¯ظپط¹ ط¬ط²ط¦ظٹط§
            </div>
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-200 pb-4">
              <div className="order-1 text-right text-sm">
                <div className="mx-auto mb-3 h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
                <p className="font-semibold text-slate-700">ط´ط±ظƒط© ط§ظ„ط¨ط±ظ…ط¬ظٹط§طھ</p>
                <p className="text-xs text-slate-500">ط¨ط±ظ…ط¬ط© ظˆطھط·ظˆظٹط±</p>
              </div>

              <div className="order-2 flex min-w-[220px] flex-1 flex-col gap-2 text-sm text-slate-700">
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">ط§ظ„ط¹ظ…ظٹظ„:</span>
                  <span>ط§ط­ظ…ط¯ ط³ط¹ظٹط¯</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">ط§ظ„ظ‡ط§طھظپ:</span>
                  <span>123456789</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">ط§ظ„ط¯ظˆظ„ط©:</span>
                  <span>Qatar</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">ط§ظ„ط¹ظ†ظˆط§ظ†:</span>
                  <span>Doha, Qatar</span>
                </div>
              </div>

              <div className="order-3 text-center">
                <div className="mx-auto h-16 w-44 rounded bg-slate-100">
                  <div className="h-full w-full bg-[linear-gradient(90deg,#0f172a_10%,#e2e8f0_10%,#e2e8f0_20%,#0f172a_20%,#0f172a_30%,#e2e8f0_30%,#e2e8f0_40%,#0f172a_40%,#0f172a_50%,#e2e8f0_50%,#e2e8f0_60%,#0f172a_60%,#0f172a_70%,#e2e8f0_70%,#e2e8f0_80%,#0f172a_80%,#0f172a_90%,#e2e8f0_90%)]" />
                </div>
                <p className="mt-2 text-xs text-slate-600">24090600033</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-md border border-slate-200">
              <table className="min-w-full border-separate border-spacing-0 text-right text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-3 py-3 text-center">#</th>
                    <th className="px-3 py-3 text-right">ظ…ظ†طھط¬</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ط³ط¹ط±</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ظƒظ…ظٹط©</th>
                    <th className="px-3 py-3 text-center">ط§ظ„ظ…ط¬ظ…ظˆط¹</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-3 text-center">{item.id}</td>
                      <td className="px-3 py-3 text-right font-semibold text-slate-800">{item.name}</td>
                      <td className="px-3 py-3 text-center">{item.price}</td>
                      <td className="px-3 py-3 text-center">{item.qty}</td>
                      <td className="px-3 py-3 text-center">{item.total}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-slate-500">ط§ظ„ظ…ط¬ظ…ظˆط¹</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 70</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-slate-500">ط§ظ„طھط®ظپظٹط¶</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 0</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-slate-500">ط§ظ„ظ…ط¯ظپظˆط¹</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 55</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-rose-600">ط§ظ„ظ…ط³طھط­ظ‚</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center font-semibold text-rose-600">
                      USD 15
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
              <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm">
                {[
                  { label: "ط§ظ„ظ…ط¬ظ…ظˆط¹", value: "USD 70", tone: "text-slate-700" },
                  { label: "ط§ظ„طھط®ظپظٹط¶", value: "USD 0", tone: "text-slate-700" },
                  { label: "ط§ظ„ظ…ط¯ظپظˆط¹", value: "USD 55", tone: "text-slate-700" },
                  { label: "ط§ظ„ظ…ط³طھط­ظ‚", value: "USD 15", tone: "text-rose-600" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-slate-200 py-2 last:border-b-0"
                  >
                    <span className="text-slate-600">{row.label}</span>
                    <span className={`font-semibold ${row.tone}`}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-md border border-slate-200 bg-white p-3 text-sm">
                <p className="font-semibold text-slate-700">ط§ظ„ط¯ظپط¹ط§طھ:</p>
                <div className="mt-2 space-y-2 text-slate-600">
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>2024-09-06</span>
                    <span className="font-semibold text-slate-700">USD 55</span>
                    <span className="text-xs text-slate-500">ط¨ط§ظٹط¨ط§ظ„</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500">ط§ظ„طھط§ط±ظٹط®: 2024-09-03</div>
          </div>
        </main>

        <Sidebar activeLabel="ط§ظ„ظپظˆط§طھظٹط±" />
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          {modal === "email" && (
            <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl" dir="rtl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-300 text-orange-400">
                !
              </div>
              <h3 className="text-lg font-semibold text-slate-700">
                ط¥ط±ط³ط§ظ„ ط§ظ„ظپط§طھظˆط±ط© ط¹ط¨ط± ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                ط³ظٹطھظ„ظ‚ظ‰ ط§ظ„ط¹ظ…ظٹظ„ ط¨ط±ظٹط¯ظ‹ط§ ط¥ظ„ظƒطھط±ظˆظ†ظٹظ‹ط§ ط¨ط§ظ„ظپط§طھظˆط±ط©
              </p>
              <p className="mt-4 text-2xl font-semibold text-rose-500">3220</p>
              <p className="text-xs text-slate-500">ط£ط¯ط®ظ„ ط§ظ„ط±ظ‚ظ… ظپظٹ ط§ظ„ظ…ط±ط¨ط¹ ط£ط¯ظ†ط§ظ‡ ظ„ظ„طھط£ظƒظٹط¯</p>
              <input
                className="mt-4 w-full rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                placeholder="ط§ط¯ط®ظ„ ط±ظ…ط² ط§ظ„طھط£ظƒظٹط¯"
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="rounded-md bg-slate-200 px-4 py-2 text-sm text-slate-700"
                >
                  ط¥ظ„ط؛ط§ط،
                </button>
                <button
                  type="button"
                  onClick={() => setModal("link")}
                  className="rounded-md bg-brand-900 px-4 py-2 text-sm text-white"
                >
                  ظ…طھط§ط¨ط¹ط©
                </button>
              </div>
            </div>
          )}

          {modal === "link" && (
            <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl" dir="rtl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-300 text-emerald-400">
                âœ“
              </div>
              <h3 className="text-lg font-semibold text-slate-700">طھظ… ظ†ط³ط® ط±ط§ط¨ط· ط§ظ„ظ…ط´ط§ط±ظƒط©</h3>
              <p className="mt-3 text-sm text-slate-500">
                {shareLink}
              </p>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="mt-4 rounded-md bg-brand-900 px-6 py-2 text-sm text-white"
              >
                ط­ط³ظ†ط§ظ‹
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
