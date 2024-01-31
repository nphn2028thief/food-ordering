import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default SignUpLayout;
