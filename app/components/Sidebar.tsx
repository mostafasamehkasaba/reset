"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Package,
  CreditCard,
  Users,
  Settings,
  Mail,
  Info,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useSidebar } from "./SidebarContext";

type SidebarProps = {
  activeLabel:
    | "لوحة البيانات"
    | "الفواتير"
    | "المنتجات"
    | "وسائل الدفع"
    | "العملاء"
    | "الإعدادات"
    | "البريد"
    | "حول"
    | string;
};

const items = [
  { label: "لوحة البيانات", href: "/", icon: LayoutDashboard },
  { label: "الفواتير", href: "/projects-pages/invoices", icon: FileText },
  { label: "المنتجات", href: "/projects-pages/products", icon: Package },
  {
    label: "وسائل الدفع",
    href: "/projects-pages/payment-methods",
    icon: CreditCard,
  },
  { label: "العملاء", href: "/projects-pages/clients", icon: Users },
  { label: "الإعدادات", href: "/projects-pages/settings", icon: Settings },
  { label: "البريد", href: "/projects-pages/mail", icon: Mail },
  { label: "حول", href: "/projects-pages/about", icon: Info },
];

export default function Sidebar({ activeLabel }: SidebarProps) {
  const { open, close } = useSidebar();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 translate-x-full overflow-y-auto bg-white transition duration-200 lg:static lg:block lg:w-60 lg:translate-x-0 ${
          open ? "translate-x-0" : ""
        }`}
        dir="rtl"
      >
        <div className="rounded-lg border border-slate-200 bg-white py-2 shadow-sm lg:rounded-none lg:border-0 lg:shadow-none">
          <div className="flex items-center justify-between px-4 py-2 text-right text-sm font-semibold text-slate-700 lg:justify-start">
            <span>القائمة</span>
            <button
              type="button"
              onClick={close}
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100 lg:hidden"
              aria-label="إغلاق القائمة"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-1 text-sm">
            {items.map((item) => {
              const isActive = item.label === activeLabel;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  className={`flex items-center justify-between gap-2 px-3 py-2 text-right ${
                    isActive
                      ? "border-r-4 border-brand-800 bg-brand-800 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  href={item.href}
                  onClick={close}
                >
                  <span className="flex items-center gap-2">
                    <Icon
                      className={`h-4 w-4 ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    />
                    {item.label}
                  </span>
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    ▪
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-slate-200 px-3 py-3">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
