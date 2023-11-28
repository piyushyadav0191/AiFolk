import React from "react";
import DashboardNavbar from "@/components/ui/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
      <DashboardNavbar />
      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default DashboardLayout;
