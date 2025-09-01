import React from "react";
import {Phone, Mail, MapPin, Flame} from 'lucide-react';
export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-red-600/10">
            <Flame className="h-6 w-6" />
          </div>
          <p className="font-extrabold">Briten Fire Service Co.</p>
        </div>
        <p className="mt-3 text-sm text-slate-700 max-w-xs">
        Fire protection company specializing in restaurant hood filter exchange services and commercial fire prevention systems throughout the Bay Area.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (415) 713‑5115</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> briten.fireservice@gmail.com</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 5538 3Rd St, San Francisco, CA94124</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a className="hover:text-red-700" href="#services">Services</a></li>
          <li><a className="hover:text-red-700" href="#credentials">Credentials</a></li>
          <li><a className="hover:text-red-700" href="#projects">Projects</a></li>
          <li><a className="hover:text-red-700" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} Briten Fire Service Co. All rights reserved.</p>
    </div>
  </div>
</footer>
);
