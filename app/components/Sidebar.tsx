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
  return (
    <aside className="hidden w-60 shrink-0 lg:block" dir="rtl">
      <div className="rounded-lg border border-slate-200 bg-white py-2 shadow-sm">
        <div className="px-4 py-2 text-right text-sm font-semibold text-slate-700">
          القائمة
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
                    ? "border-r-4 border-[#0e2a47] bg-[#0e2a47] text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                href={item.href}
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
  );
}
