import React from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Credentials } from "./components/credentials";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Header />
      <Hero />
      <Services />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
