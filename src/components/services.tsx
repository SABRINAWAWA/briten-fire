import React from "react";
import { Flame, Wrench, ClipboardCheck, FileCheck2, Shield, Building2 } from "lucide-react";
import { ServiceCard } from "./serviceCard";

export const Services: React.FC = () => (
<section id="services" className="py-16 border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Core Services</h2>
        <p className="mt-2 text-slate-700">Professional fire protection and hood filter services for Bay Area restaurants.</p>
      </div>
    </div>
   
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard icon={<Flame className="h-6 w-6" />} title="Filter Exchange Service">
        $10/filter replacement. Various sizes. Bay Area coverage.
      </ServiceCard>
      <ServiceCard icon={<Shield className="h-6 w-6" />} title="Commercial Fire Protection">
        Complete fire prevention systems for restaurants and commercial properties.
      </ServiceCard>
      <ServiceCard icon={<Wrench className="h-6 w-6" />} title="Kitchen Hood Suppression">
        Professional hood suppression system installation and maintenance.
      </ServiceCard>
      <ServiceCard icon={<ClipboardCheck className="h-6 w-6" />} title="Commercial Sprinkler Systems">
        Sprinkler installation, inspection, and maintenance services.
      </ServiceCard>
      <ServiceCard icon={<FileCheck2 className="h-6 w-6" />} title="Fire Safety Consulting">
        Code compliance guidance and system upgrade recommendations.
      </ServiceCard>
      <ServiceCard icon={<Shield className="h-6 w-6" />} title="Emergency Response">
        24/7 emergency repairs and rapid response services.
      </ServiceCard>
    </div>
  </div>
</section>
);
