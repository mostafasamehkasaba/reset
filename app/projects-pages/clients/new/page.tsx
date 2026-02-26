import Link from "next/link";
import Sidebar from "../../../components/Sidebar";

export default function NewClientPage() {
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
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-right text-lg font-semibold text-slate-700">ط¹ظ…ظٹظ„ ط¬ط¯ظٹط¯</div>
            <Link
              href="/projects-pages/clients"
              className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600"
            >
              ط±ط¬ظˆط¹
            </Link>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">ط§ظ„ط§ط³ظ…</label>
                <input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ</label>
                <input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">ط§ظ„ظ‡ط§طھظپ</label>
                <input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">ط§ظ„ط¯ظˆظ„ط©</label>
                <input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="space-y-2 lg:col-span-2">
                <label className="text-sm font-semibold text-slate-700">ط§ظ„ط¹ظ†ظˆط§ظ†</label>
                <input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-full bg-brand-900 px-8 py-2 text-sm text-white">
                ط­ظپط¸
              </button>
              <Link
                href="/projects-pages/clients"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                ط¥ظ„ط؛ط§ط،
              </Link>
            </div>
          </div>
        </main>

        <Sidebar activeLabel="ط§ظ„ط¹ظ…ظ„ط§ط،" />
      </div>
    </div>
  );
}
