import React, { useRef } from "react";
import { Phone, Mail, MapPin, ClipboardCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_69z7bic",   // from EmailJS dashboard
        "template_gily14o",  // from EmailJS dashboard
        formRef.current,
        "lPsFo2pjm6VWta2Ht"    // from EmailJS dashboard
      )
      .then(
        () => {
          alert("Request sent successfully!");
          formRef.current?.reset();
        },
        (error: { text: string }) => {
          console.error("EmailJS error:", error.text);
          alert("Failed to send request. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 border-t border-slate-200 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left info */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Request Service or a Quote
            </h2>
            <p className="mt-2 text-slate-700">
              Tell us about your service request. We respond promptly.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />{" "}
                <span>
                  <strong>Phone:</strong> (415) 713-5115
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />{" "}
                <span>
                  <strong>Email:</strong> briten.fireservice@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />{" "}
                <span>
                  <strong>Office:</strong> 5538 3rd St, San Francisco, CA 94124
                </span>
              </li>
            </ul>
          </div>

          {/* Right form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Restaurant</label>
                <input
                  name="restaurant"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Business / Restaurant"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="(415) 555-0137"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Project Address</label>
                <input
                  name="address"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Street, City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Service Type</label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option>Restaurant Hood Filter Exchange</option>
                  <option>Commercial Sprinkler System</option>
                  <option>Kitchen Hood Suppression System</option>
                  <option>Fire Inspection</option>
                  <option>Fire Plan</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Details</label>
                <textarea
                  name="details"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 
                  focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Brief scope, deadline, plans available, AHJ, etc."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 
              text-sm font-semibold shadow-sm bg-red-600 text-white hover:bg-red-700"
            >
              <ClipboardCheck className="h-4 w-4" /> Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
