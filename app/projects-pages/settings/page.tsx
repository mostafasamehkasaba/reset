import Sidebar from "../../components/Sidebar";
import ThemeToggle from "../../components/ThemeToggle";
export default function SettingsPage() {
  const fields = [
    { label: "اسم الموقع", value: "شركة البرمجيات" },
    { label: "رابط الموقع", value: "https://example.com" },
    {
      label: "البريد الإلكتروني للموقع",
      value: "example@example.com",
      lock: true,
    },
    { label: "العناصر لكل صفحة", value: "20" },
  ];

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
              الإعدادات
            </div>
          </div>

          <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            {fields.map((field) => (
              <div key={field.label} className="flex flex-wrap items-center gap-4">
                <label className="min-w-[160px] text-right text-sm font-semibold text-slate-700">
                  {field.label}
                </label>
                <div className="relative flex-1">
                  <input
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                    defaultValue={field.value}
                  />
                  {field.lock && (
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-4">
              <label className="min-w-[160px] text-right text-sm font-semibold text-slate-700">
                العملة الافتراضية
              </label>
              <select className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <option>ريال عُماني</option>
                <option>ريال سعودي</option>
                <option>دولار</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <label className="min-w-[160px] text-right text-sm font-semibold text-slate-700">
                المظهر
              </label>
              <div className="flex-1">
                <ThemeToggle />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-right text-sm font-semibold text-slate-700">
                تفاصيل الفاتورة
              </div>
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 px-3 py-2 text-slate-500">
                  {["B", "I", "U", "S", "•", "■", "▪", "✚", "✖"].map(
                    (item) => (
                      <button
                        key={item}
                        className="rounded-md px-2 py-1 text-xs hover:bg-slate-100"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
                <div className="grid gap-4 p-4 lg:grid-cols-[1fr_220px]">
                  <textarea
                    rows={8}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                    defaultValue=""
                  />
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-right text-sm">
                    <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500" />
                    <p className="font-semibold text-slate-700">شركة البرمجيات</p>
                    <p className="text-xs text-slate-500">برمجة وتطوير</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Sidebar activeLabel="الإعدادات" />
      </div>
    </div>
  );
}



