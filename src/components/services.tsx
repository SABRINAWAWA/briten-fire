import React from "react";
import { Flame, Wrench, ClipboardCheck, FileCheck2, Shield, Building2 } from "lucide-react";
import { ServiceCard } from "./serviceCard";

export const Services: React.FC = () => (
  <section id="services" className="py-16 border-t border-slate-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Core Services</h2>
          <p className="mt-2 text-slate-700">End‑to‑end fire protection for new builds, tenant improvements, and remodels.</p>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={<Flame className="h-6 w-6" />} title="Commercial Sprinkler (NFPA 13)">
          Design, permitting, installation, hydrostatic testing, and acceptance.
        </ServiceCard>
        <ServiceCard icon={<Wrench className="h-6 w-6" />} title="Remodels & TI (NFPA 13R)">
          Alterations, relocations, additions, and code‑compliant upgrades.
        </ServiceCard>
        <ServiceCard icon={<ClipboardCheck className="h-6 w-6" />} title="Inspections & Maintenance">
          Quarterly/annual inspections, backflow, 5‑year certifications, and repairs.
        </ServiceCard>
        <ServiceCard icon={<FileCheck2 className="h-6 w-6" />} title="Plans & Permitting">
          Submittals, shop drawings, calculations, and AHJ coordination.
        </ServiceCard>
        <ServiceCard icon={<Shield className="h-6 w-6" />} title="Testing & Compliance">
          Acceptance testing, documentation, and compliance reports for AHJs.
        </ServiceCard>
        <ServiceCard icon={<Building2 className="h-6 w-6" />} title="Specialty & Retrofits">
          Restaurants, retail, multi‑unit, seismic bracing, and code retrofits.
        </ServiceCard>
      </div>
    </div>
  </section>
);
