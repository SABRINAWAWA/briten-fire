import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mt-0.5">{icon}</div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);
