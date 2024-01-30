import { ReactNode } from "react";

import Header from "@/components/Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="p-4 pt-0">{children}</div>
    </div>
  );
};

export default MainLayout;
