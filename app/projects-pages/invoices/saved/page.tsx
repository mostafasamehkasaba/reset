import Link from "next/link";
import Sidebar from "../../../components/Sidebar";

const items = [
  { name: "قالب ووردبريس", price: 20, qty: 1, total: 20 },
  { name: "تصميم موقع", price: 30, qty: 1, total: 30 },
  { name: "اعداد سيرفر", price: 50, qty: 1, total: 50 },
];

export default function SavedInvoicePage() {
  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800">
      <header className="bg-[#071a2c] text-white shadow-sm" dir="ltr">
        <div className="flex h-14 w-full items-center justify-between px-6">
          <div className="flex items-center gap-3 text-slate-200">
            <button
              className="rounded-md p-1 transition hover:bg-white/10"
              aria-label="الصفحة الرئيسية"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M6 10v10h12V10" />
              </svg>
            </button>
            <button
              className="rounded-md p-1 transition hover:bg-white/10"
              aria-label="المستخدم"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c1.8-3 5-4.5 7.5-4.5s5.7 1.5 7.5 4.5" />
              </svg>
            </button>
            <button
              className="rounded-md p-1 transition hover:bg-white/10"
              aria-label="القائمة الرئيسية"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="text-right text-base font-semibold">فاتورة+</div>
        </div>
      </header>

      <div className="flex w-full gap-5 px-6 py-6" dir="ltr">
        <main className="flex-1 space-y-4" dir="rtl">
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-right text-lg font-semibold text-slate-700">
              الفواتير
            </div>
            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
              جديد
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  العملة
                </label>
                <input
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  defaultValue="ريال السعودي"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  تاريخ الكتابة
                </label>
                <input
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  defaultValue="09/28/2024"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  تاريخ الاستحقاق
                </label>
                <input
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  defaultValue="10/01/2024"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  العميل
                </label>
                <input
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  defaultValue="سامي ابو انس"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  ملاحظات
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  defaultValue=""
                  readOnly
                />
              </div>
            </aside>

            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-[40px_1fr_120px_120px_120px_120px] gap-2 text-right text-sm font-semibold text-slate-600">
                <span>#</span>
                <span>الاسم</span>
                <span>السعر</span>
                <span>الكمية</span>
                <span>المجموع</span>
                <span className="text-center">حذف</span>
              </div>

              <div className="mt-3 space-y-2">
                {items.map((item, idx) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[40px_1fr_120px_120px_120px_120px] items-center gap-2 rounded-md border border-slate-200 px-2 py-2 text-sm"
                  >
                    <span>{idx + 1}</span>
                    <input
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1"
                      defaultValue={item.name}
                      readOnly
                    />
                    <input
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center"
                      defaultValue={item.price}
                      readOnly
                    />
                    <input
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center"
                      defaultValue={item.qty}
                      readOnly
                    />
                    <input
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center"
                      defaultValue={item.total}
                      readOnly
                    />
                    <span className="mx-auto text-slate-300">—</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3">
                <div className="grid grid-cols-[1fr_140px] items-center gap-2 text-sm">
                  <div className="text-right font-semibold text-slate-700">
                    المجموع
                  </div>
                  <input
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center"
                    defaultValue="100"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-[1fr_140px] items-center gap-2 text-sm">
                  <div className="text-right font-semibold text-slate-700">
                    التخفيض
                  </div>
                  <input
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center"
                    defaultValue="0"
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-4 rounded-md border border-rose-200 bg-rose-100 px-4 py-3 text-right text-lg font-semibold text-rose-700">
                المستحق <span className="float-left">100</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/projects-pages/invoices"
                  className="rounded-full bg-[#071a2c] px-8 py-2 text-sm text-white"
                >
                  حفظ
                </Link>
                <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  منتج +
                </button>
              </div>
            </section>
          </div>
        </main>

        <Sidebar activeLabel="الفواتير" />
      </div>
    </div>
  );
}

