import React, { useState } from "react";
import { Flame, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-red-600/10">
              <Flame className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-lg">Briten Fire Service Co.</p>
              <p className="text-xs text-slate-600">San Francisco • California</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-red-700 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-red-600 text-white hover:bg-red-700 transition-colors">
              <Phone className="h-4 w-4" /> Request Service
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-slate-800 font-medium">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-red-600 text-white">
              <Phone className="h-4 w-4" /> Request Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
