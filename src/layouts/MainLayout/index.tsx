import { ReactNode } from "react";

import Navbar from "@/layouts/components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <div className="p-4 pt-0">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
