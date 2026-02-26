"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { clients } from "./data";

export default function ClientsPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);
  const filteredClients = useMemo(() => {
    const q = query.trim();
    if (!q) return clients;
    return clients.filter(
      (client) =>
        client.name.includes(q) ||
        client.email.includes(q) ||
        client.phone.includes(q) ||
        client.country.includes(q) ||
        String(client.due).includes(q) ||
        client.currency.includes(q)
    );
  }, [query]);
  const selectedClient = useMemo(
    () => clients.find((client) => client.id === openId) ?? null,
    [openId]
  );

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800">
      <header className="bg-[#071a2c] text-white shadow-sm" dir="ltr">
        <div className="flex h-14 w-full items-center justify-between px-6">
          <div className="flex items-center gap-3 text-slate-200">
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="الصفحة الرئيسية">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M6 10v10h12V10" />
              </svg>
            </button>
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="المستخدم">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c1.8-3 5-4.5 7.5-4.5s5.7 1.5 7.5 4.5" />
              </svg>
            </button>
            <button className="rounded-md p-1 transition hover:bg-white/10" aria-label="القائمة الرئيسية">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="text-right text-base font-semibold">فاتورة+</div>
        </div>
      </header>

      <div className="flex w-full gap-5 px-6 py-6" dir="ltr">
        <main className="flex-1 space-y-4" dir="rtl">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-right text-lg font-semibold text-slate-700">العملاء</div>
            <div className="flex items-center gap-2">
              <Link
                href="/projects-pages/clients/new"
                className="rounded-full bg-[#071a2c] px-4 py-2 text-sm text-white"
              >
                جديد +
              </Link>
              <div className="flex items-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                <span className="grid h-10 w-10 place-items-center bg-emerald-500 text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                </span>
                <input
                  className="h-10 w-48 px-3 text-sm outline-none"
                  placeholder="بحث"
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
                    <th className="px-3 py-3 text-right">الاسم</th>
                    <th className="px-3 py-3 text-center">بريد إلكتروني</th>
                    <th className="px-3 py-3 text-center">الهاتف</th>
                    <th className="px-3 py-3 text-center">الدولة</th>
                    <th className="px-3 py-3 text-center">الفواتير</th>
                    <th className="px-3 py-3 text-center">المستحق</th>
                    <th className="px-3 py-3 text-center" aria-label="الإجراءات">…</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client, index) => (
                    <tr key={client.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-3 text-center text-slate-700">{client.id}</td>
                      <td className="px-3 py-3 text-right font-semibold text-slate-800">
                        <Link
                          href={`/projects-pages/clients/${client.id}`}
                          className="hover:text-[#0e2a47]"
                        >
                          {client.name}
                        </Link>
                      </td>
                      <td className="px-3 py-3 text-center text-slate-600">{client.email}</td>
                      <td className="px-3 py-3 text-center text-slate-600">{client.phone}</td>
                      <td className="px-3 py-3 text-center text-slate-600">{client.country}</td>
                      <td className="px-3 py-3 text-center text-slate-700">{client.invoices}</td>
                      <td className="px-3 py-3 text-center font-semibold text-emerald-700">
                        {client.currency} {client.due}
                      </td>
                      <td className="px-3 py-3 text-center text-slate-500">
                        <button
                          className="rounded-full p-1 hover:bg-slate-200"
                          aria-label="خيارات"
                          type="button"
                          onClick={() => setOpenId(client.id)}
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

        <Sidebar activeLabel="العملاء" />
      </div>

      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl" dir="rtl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">إجراءات العميل</p>
                <p className="text-xs text-slate-500">{selectedClient.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
                aria-label="إغلاق"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <a
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center text-slate-600 hover:bg-slate-50"
                href={
                  selectedClient
                    ? `/projects-pages/clients/${selectedClient.id}`
                    : "#"
                }
              >
                عرض
              </a>
              <a
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center text-slate-600 hover:bg-slate-50"
                href="/projects-pages/clients/new"
              >
                تعديل
              </a>
              <button
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-600 hover:bg-slate-50"
                type="button"
                onClick={() => alert("تم نسخ بيانات العميل (واجهة فقط)")}
              >
                نسخ
              </button>
              <button
                className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-rose-700 hover:bg-rose-100"
                type="button"
                onClick={() => {
                  alert("تم حذف العميل (واجهة فقط)");
                  setOpenId(null);
                }}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
