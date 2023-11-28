import React from "react";
import Navbar from "./components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default LandingLayout;
