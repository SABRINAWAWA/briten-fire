import React from "react";
import { Shield, FileCheck2 } from "lucide-react";

export const Credentials: React.FC = () => (
<section id="credentials" className="py-16 border-t border-slate-200 bg-slate-50/60">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold tracking-tight">Licensed & Trusted</h2>
    <div className="mt-8 grid lg:grid-cols-2 gap-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-lg">Fire Protection License</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
          <li>Active California fire protection license</li>
          <li>Fully licensed and insured contractor</li>
          <li>Compliant with all state fire safety regulations</li>
        </ul>
      </div>
       
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-lg">Filter Exchange Service Details</h3>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <dt className="text-slate-600">Filter Exchange</dt>
            <dd className="text-2xl font-extrabold">$10</dd>
            <p className="text-xs text-slate-600 mt-1">Per filter • All sizes</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
            <dt className="text-slate-600">Coverage Area</dt>
            <dd className="text-lg font-bold">Bay Area</dd>
            <p className="text-xs text-slate-600 mt-1">Restaurants • Commercial Kitchens</p>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>
);
