"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Sidebar from "../../components/Sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const days = Array.from({ length: 30 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);

const chartData = {
  labels: days,
  datasets: [
    {
      label: "الفواتير",
      data: [
        0, 6, 2, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 5,
        0, 0, 0, 6, 2, 8, 3, 6,
      ],
      borderColor: "#1e88e5",
      backgroundColor: "rgba(30,136,229,0.2)",
      pointRadius: 3,
      tension: 0.35,
    },
    {
      label: "الدفعات",
      data: [
        0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 5, 0, 7,
      ],
      borderColor: "#f39c12",
      backgroundColor: "rgba(243,156,18,0.2)",
      pointRadius: 3,
      tension: 0.35,
    },
    {
      label: "المدفوع",
      data: [
        0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2,
        0, 0, 0, 1, 0, 2, 0, 2,
      ],
      borderColor: "#2ecc71",
      backgroundColor: "rgba(46,204,113,0.2)",
      pointRadius: 3,
      tension: 0.35,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      rtl: true,
      titleAlign: "right" as const,
      bodyAlign: "right" as const,
      backgroundColor: "#0f172a",
      titleColor: "#f8fafc",
      bodyColor: "#f8fafc",
      borderColor: "rgba(148,163,184,0.4)",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#94a3b8",
        font: {
          size: 10,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(226,232,240,0.8)",
      },
      ticks: {
        color: "#94a3b8",
        font: {
          size: 10,
        },
      },
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/95 text-slate-700 shadow-sm backdrop-blur">
        <div className="flex h-16 w-full items-center justify-between px-6" dir="rtl">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0e2a47] text-white shadow-md">
              <span className="text-lg font-semibold">ف+</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">لوحة الإدارة</p>
              <p className="text-base font-semibold text-slate-800">فاتورة+</p>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              حالة النظام مستقرة
            </span>
          </div>

          <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
            <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                className="w-full text-sm outline-none placeholder:text-slate-400"
                placeholder="بحث سريع في الفواتير والعملاء"
              />
              <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
                Ctrl + K
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
              aria-label="الإشعارات"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 8a6 6 0 0112 0v5l2 2H4l2-2V8z" />
                <path d="M9.5 19a2.5 2.5 0 005 0" />
              </svg>
            </button>
            <button
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
              aria-label="الإعدادات"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2l1.5 3.5 3.8.5-2.8 2.7.7 3.8L12 10.9 8.8 12.5l.7-3.8L6.7 6l3.8-.5L12 2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm sm:flex">
              <div className="h-8 w-8 rounded-full bg-slate-200 text-center text-xs font-semibold leading-8 text-slate-700">
                أ
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">مرحباً</p>
                <p className="text-sm font-semibold text-slate-700">
                  أحمد سعيد
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex w-full gap-5 px-6 py-6">
        <main className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3 text-slate-600">
              <button
                className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm shadow-sm"
                aria-label="السابق"
              >
                ◀
              </button>
              <span className="text-sm font-semibold">OMR</span>
              <button
                className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm shadow-sm"
                aria-label="التالي"
              >
                ▶
              </button>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-slate-700">
                لوحة البيانات
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="rounded-lg border border-slate-200 bg-white/95 p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 rounded-md bg-[#0e2a47] px-3 py-1 text-white shadow-sm">
                    فلترة
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-4" dir="rtl">
                  <div className="flex items-center gap-2">
                    <span>الشهر</span>
                    <div className="relative">
                      <select
                        className="appearance-none rounded-md border border-slate-200 bg-white px-3 py-1 pl-8 text-sm"
                        aria-label="الشهر"
                        defaultValue="09"
                      >
                        <option value="09">سبتمبر</option>
                        <option value="10">أكتوبر</option>
                        <option value="11">نوفمبر</option>
                      </select>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M7 10l5 5 5-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>السنة:</span>
                    <input
                      className="w-20 rounded-md border border-slate-200 bg-white px-2 py-1 text-center"
                      defaultValue="2024"
                      aria-label="السنة"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                  <div className="font-semibold text-slate-700">ريال عماني</div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#1e88e5]" />
                      الفواتير
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#f39c12]" />
                      الدفعات
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2ecc71]" />
                      المدفوع
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600">OMR</div>
                </div>

                <div className="mt-3">
                  <div className="h-56">
                    <Line data={chartData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-3">
              <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-100 via-blue-100 to-blue-50 p-4 shadow-sm">
                <div className="flex items-center justify-between text-blue-900">
                  <div className="rounded-full bg-blue-200/60 p-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 2h9l3 3v17H6z" />
                      <path d="M9 11h6M9 15h6M9 7h3" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">19</div>
                    <div className="text-xs text-blue-800">
                      الفواتير - من أصل 30
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-gradient-to-br from-yellow-100 via-yellow-100 to-yellow-50 p-4 shadow-sm">
                <div className="flex items-center justify-between text-yellow-900">
                  <div className="rounded-full bg-yellow-200/70 p-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="5" y="3" width="14" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">OMR 1110</div>
                    <div className="text-xs">المجموع</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-100 via-emerald-100 to-emerald-50 p-4 shadow-sm">
                  <div className="flex items-center justify-between text-emerald-900">
                    <div className="rounded-full bg-emerald-200/70 p-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8 12l2.5 2.5L16 9" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">OMR 555</div>
                      <div className="text-xs">المبلغ المدفوع</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <div className="rounded-full bg-slate-200/70 p-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8 12h8" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">OMR 5</div>
                      <div className="text-xs">التخفيض</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-rose-200 bg-gradient-to-br from-rose-100 via-rose-100 to-rose-50 p-4 shadow-sm">
                <div className="flex items-center justify-between text-rose-900">
                  <div className="rounded-full bg-rose-200/70 p-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v6l4 2" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">OMR 630</div>
                    <div className="text-xs">المستحق</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white/70 px-4 py-3 text-center text-xs text-slate-500 shadow-sm">
            جميع الحقوق محفوظة فاتورة+ © 2024 - بواسطة ديفر
          </div>
        </main>

        <Sidebar activeLabel="لوحة البيانات" />
      </div>
    </div>
  );
}

