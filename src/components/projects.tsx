import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Restaurant TI — NFPA 13 Remodel", desc: "Heads relocation, new branch lines, hydraulic calcs, inspection with AHJ." },
  { title: "Retail Build‑Out — Acceptance Testing", desc: "Underground tie‑in verification, hydro test, backflow assembly checks." },
  { title: "Multi‑Unit Retrofit — Seismic Bracing", desc: "Hanger upgrades, sway bracing per code, as‑builts and closeout docs." },
];

export const Projects: React.FC = () => (
  <section id="projects" className="py-16 border-t border-slate-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight">Recent Work</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
            <div className="aspect-video rounded-2xl bg-slate-100 border border-slate-200" />
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
