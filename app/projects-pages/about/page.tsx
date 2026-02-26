import Sidebar from "../../components/Sidebar";

export default function AboutPage() {
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
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-right text-lg font-semibold text-slate-700">حول</div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" dir="rtl">
              <h3 className="mb-4 text-lg font-semibold text-slate-800">رخصة البرنامج</h3>
              <p className="text-sm font-semibold text-slate-700">يمكنك القيام بما يلي</p>
              <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-slate-600">
                <li>استخدام المنتج الذي اشتريته مرة واحدة فقط</li>
                <li>يسمح لك الترخيص الشخصي باستخدام المنتج لمشروعك الشخصي أو مشروع شركتك</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-700">لا يمكنك القيام بما يلي</p>
              <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-slate-600">
                <li>استخدام المنتج أكثر من مرة</li>
                <li>استخدام المنتج لإنشاء أو تطوير مشاريع للعملاء أو الزبائن</li>
                <li>إجراء تعديلات على المنتج بهدف بيعه أو إعادة توزيعه مجانا</li>
                <li>إعادة نشر المنتج أو توزيعه أو بيعه. ملكية المنتجات في بيكالكا تعود إلى البائع فقط.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                بشرائك هذا المنتج، فإنك تشتري حق الاستخدام، وليس حق الملكية والنشر.
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

        <Sidebar activeLabel="حول" />
      </div>
    </div>
  );
}
