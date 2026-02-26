import Sidebar from "../../components/Sidebar";

export default function AboutPage() {
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
            <div className="text-right text-lg font-semibold text-slate-700">ط­ظˆظ„</div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" dir="rtl">
              <h3 className="mb-4 text-lg font-semibold text-slate-800">ط±ط®طµط© ط§ظ„ط¨ط±ظ†ط§ظ…ط¬</h3>
              <p className="text-sm font-semibold text-slate-700">ظٹظ…ظƒظ†ظƒ ط§ظ„ظ‚ظٹط§ظ… ط¨ظ…ط§ ظٹظ„ظٹ</p>
              <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-slate-600">
                <li>ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظ…ظ†طھط¬ ط§ظ„ط°ظٹ ط§ط´طھط±ظٹطھظ‡ ظ…ط±ط© ظˆط§ط­ط¯ط© ظپظ‚ط·</li>
                <li>ظٹط³ظ…ط­ ظ„ظƒ ط§ظ„طھط±ط®ظٹطµ ط§ظ„ط´ط®طµظٹ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظ…ظ†طھط¬ ظ„ظ…ط´ط±ظˆط¹ظƒ ط§ظ„ط´ط®طµظٹ ط£ظˆ ظ…ط´ط±ظˆط¹ ط´ط±ظƒطھظƒ</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-700">ظ„ط§ ظٹظ…ظƒظ†ظƒ ط§ظ„ظ‚ظٹط§ظ… ط¨ظ…ط§ ظٹظ„ظٹ</p>
              <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-slate-600">
                <li>ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظ…ظ†طھط¬ ط£ظƒط«ط± ظ…ظ† ظ…ط±ط©</li>
                <li>ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظ…ظ†طھط¬ ظ„ط¥ظ†ط´ط§ط، ط£ظˆ طھط·ظˆظٹط± ظ…ط´ط§ط±ظٹط¹ ظ„ظ„ط¹ظ…ظ„ط§ط، ط£ظˆ ط§ظ„ط²ط¨ط§ط¦ظ†</li>
                <li>ط¥ط¬ط±ط§ط، طھط¹ط¯ظٹظ„ط§طھ ط¹ظ„ظ‰ ط§ظ„ظ…ظ†طھط¬ ط¨ظ‡ط¯ظپ ط¨ظٹط¹ظ‡ ط£ظˆ ط¥ط¹ط§ط¯ط© طھظˆط²ظٹط¹ظ‡ ظ…ط¬ط§ظ†ط§</li>
                <li>ط¥ط¹ط§ط¯ط© ظ†ط´ط± ط§ظ„ظ…ظ†طھط¬ ط£ظˆ طھظˆط²ظٹط¹ظ‡ ط£ظˆ ط¨ظٹط¹ظ‡. ظ…ظ„ظƒظٹط© ط§ظ„ظ…ظ†طھط¬ط§طھ ظپظٹ ط¨ظٹظƒط§ظ„ظƒط§ طھط¹ظˆط¯ ط¥ظ„ظ‰ ط§ظ„ط¨ط§ط¦ط¹ ظپظ‚ط·.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                ط¨ط´ط±ط§ط¦ظƒ ظ‡ط°ط§ ط§ظ„ظ…ظ†طھط¬طŒ ظپط¥ظ†ظƒ طھط´طھط±ظٹ ط­ظ‚ ط§ظ„ط§ط³طھط®ط¯ط§ظ…طŒ ظˆظ„ظٹط³ ط­ظ‚ ط§ظ„ظ…ظ„ظƒظٹط© ظˆط§ظ„ظ†ط´ط±.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" dir="ltr">
              <h3 className="mb-4 text-lg font-semibold text-slate-800">License</h3>
              <p className="text-sm font-semibold text-slate-700">You can do the following</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Use the product you purchased only once</li>
                <li>The personal license allows you to use the product for your personal or company project</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-700">You cannot do the following</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Use the product more than once</li>
                <li>Using the product to create or develop projects for clients and customers</li>
                <li>Making modifications to the product with the aim of selling it or redistributing it for free</li>
                <li>Republish, distribute, or sell the product. Ownership of the products in Picalica belongs to the seller only.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                By purchasing this product, you are buying the right to use, not the right to ownership and publication.
              </p>
            </div>
          </div>
        </main>

        <Sidebar activeLabel="ط­ظˆظ„" />
      </div>
    </div>
  );
}
