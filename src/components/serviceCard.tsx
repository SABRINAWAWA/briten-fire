import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => (
  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-red-600/10">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-slate-700">{children}</p>
  </div>
);
