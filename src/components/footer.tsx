import React from "react";

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200 bg-white py-6 mt-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600">
      &copy; {new Date().getFullYear()} Briten Fire Service Co. All rights reserved.
    </div>
  </footer>
);
