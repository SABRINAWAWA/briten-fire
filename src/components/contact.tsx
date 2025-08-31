import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact: React.FC = () => (
  <section id="contact" className="py-16 border-t border-slate-200 bg-slate-50/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight">Contact Us</h2>
      <p className="mt-2 text-slate-700">Request a quote or schedule a service appointment.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center gap-3">
          <Phone className="h-6 w-6 text-red-600" />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-sm text-slate-700">(415) 555-1234</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center gap-3">
          <Mail className="h-6 w-6 text-red-600" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-slate-700">info@britenfireservice.com</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center gap-3">
          <MapPin className="h-6 w-6 text-red-600" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-sm text-slate-700">43486 Ellsworth St, Fremont, CA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
