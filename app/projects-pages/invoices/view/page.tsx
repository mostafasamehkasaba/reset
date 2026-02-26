"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

const items = [
  { id: 1, name: "اعداد ووردبريس", price: 20, qty: 1, total: "USD 20" },
  { id: 2, name: "تصميم موقع", price: 30, qty: 1, total: "USD 30" },
  { id: 3, name: "اعداد سيرفر", price: 20, qty: 1, total: "USD 20" },
];

export default function InvoiceViewPage() {
  const [modal, setModal] = useState<"email" | "link" | null>(null);
  const shareLink = "invoices/24090600033";

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
            <div className="text-right text-lg font-semibold text-slate-700">
              رقم الفاتورة: 24090600033
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-full bg-emerald-500 px-4 py-2 text-sm text-white"
              >
                تنزيل ملف PDF
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full bg-[#071a2c] px-4 py-2 text-sm text-white"
              >
                طباعة
              </button>
              <button
                type="button"
                onClick={() => setModal("email")}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                إرسال بالبريد
              </button>
              <a
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                href="/projects-pages/payment-methods"
              >
                صفحة الدفع
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] rounded-md border-2 border-sky-400/80 px-6 py-3 text-lg font-semibold text-sky-500/80">
              تم الدفع جزئيا
            </div>
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-200 pb-4">
              <div className="order-1 text-right text-sm">
                <div className="mx-auto mb-3 h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
                <p className="font-semibold text-slate-700">شركة البرمجيات</p>
                <p className="text-xs text-slate-500">برمجة وتطوير</p>
              </div>

              <div className="order-2 flex min-w-[220px] flex-1 flex-col gap-2 text-sm text-slate-700">
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">العميل:</span>
                  <span>احمد سعيد</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">الهاتف:</span>
                  <span>123456789</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">الدولة:</span>
                  <span>Qatar</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <span className="font-semibold">العنوان:</span>
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
                    <th className="px-3 py-3 text-right">منتج</th>
                    <th className="px-3 py-3 text-center">السعر</th>
                    <th className="px-3 py-3 text-center">الكمية</th>
                    <th className="px-3 py-3 text-center">المجموع</th>
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
                    <td className="px-3 py-3 text-right text-slate-500">المجموع</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 70</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-slate-500">التخفيض</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 0</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-slate-500">المدفوع</td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-600"> </td>
                    <td className="px-3 py-3 text-center text-slate-700">USD 55</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-center text-slate-500"> </td>
                    <td className="px-3 py-3 text-right text-rose-600">المستحق</td>
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
                  { label: "المجموع", value: "USD 70", tone: "text-slate-700" },
                  { label: "التخفيض", value: "USD 0", tone: "text-slate-700" },
                  { label: "المدفوع", value: "USD 55", tone: "text-slate-700" },
                  { label: "المستحق", value: "USD 15", tone: "text-rose-600" },
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
                <p className="font-semibold text-slate-700">الدفعات:</p>
                <div className="mt-2 space-y-2 text-slate-600">
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>2024-09-06</span>
                    <span className="font-semibold text-slate-700">USD 55</span>
                    <span className="text-xs text-slate-500">بايبال</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500">التاريخ: 2024-09-03</div>
          </div>
        </main>

        <Sidebar activeLabel="الفواتير" />
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          {modal === "email" && (
            <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl" dir="rtl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-300 text-orange-400">
                !
              </div>
              <h3 className="text-lg font-semibold text-slate-700">
                إرسال الفاتورة عبر البريد الإلكتروني
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                سيتلقى العميل بريدًا إلكترونيًا بالفاتورة
              </p>
              <p className="mt-4 text-2xl font-semibold text-rose-500">3220</p>
              <p className="text-xs text-slate-500">أدخل الرقم في المربع أدناه للتأكيد</p>
              <input
                className="mt-4 w-full rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                placeholder="ادخل رمز التأكيد"
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="rounded-md bg-slate-200 px-4 py-2 text-sm text-slate-700"
                >
                  إلغاء
                </button>
                <button
                  type="button"
                  onClick={() => setModal("link")}
                  className="rounded-md bg-[#071a2c] px-4 py-2 text-sm text-white"
                >
                  متابعة
                </button>
              </div>
            </div>
          )}

          {modal === "link" && (
            <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl" dir="rtl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-300 text-emerald-400">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-slate-700">تم نسخ رابط المشاركة</h3>
              <p className="mt-3 text-sm text-slate-500">
                {shareLink}
              </p>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="mt-4 rounded-md bg-[#071a2c] px-6 py-2 text-sm text-white"
              >
                حسناً
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
