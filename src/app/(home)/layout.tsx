import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default HomeLayout;
