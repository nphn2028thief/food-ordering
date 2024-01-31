import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AboutLayout;
