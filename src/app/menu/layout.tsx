import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const MenuLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default MenuLayout;
