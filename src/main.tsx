import React from "react";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const Main: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 text-center"
    >
      <h1 className="text-2xl font-bold mb-4">React + TypeScript + Framer Motion + Lucide</h1>
      <Sun size={48} color="orange" />
    </motion.div>
  );
};

export default Main;
