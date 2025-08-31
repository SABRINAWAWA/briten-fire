import React from "react";
import { motion } from "framer-motion";
import { Flame, Shield, FileCheck2, CheckCircle2, Building2, HardHat, Phone } from "lucide-react";
import { Badge } from "./badge";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_45rem_at_80%_-10%,rgba(220,38,38,0.15),transparent),radial-gradient(35rem_35rem_at_10%_10%,rgba(190,18,60,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Protecting People, Property & Compliance
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Full‑service fire protection contractor specializing in commercial sprinkler systems (NFPA 13 & 13R), remodels, inspections, testing, and maintenance—serving the Bay Area with safety and reliability.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-red-600 text-white hover:bg-red-700">
                <Phone className="h-4 w-4" /> Get a Fast Quote
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Badge icon={<Shield className="h-5 w-5" />} title="Licensed & Insured" description="California Fire Protection Contractor" />
              <Badge icon={<FileCheck2 className="h-5 w-5" />} title="Active License" description="Verified with CA License Board" />
              <Badge icon={<CheckCircle2 className="h-5 w-5" />} title="BuildZoom 93" description="Top 27% of CA Contractors" />
            </div>

            <div className="mt-8 p-4 rounded-2xl border border-slate-200 bg-white/70">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> Briten Fire Service Co.</span>
                <span className="inline-flex items-center gap-2"><HardHat className="h-4 w-4" /> Owner: Mingjia John Chang</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
            <div className="aspect-[4/3] w-full rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm p-6 flex items-center justify-center">
              <div className="text-center">
                <Flame className="h-16 w-16 mx-auto" />
                <p className="mt-4 font-semibold">Fire Sprinkler • Remodels • Inspections</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
