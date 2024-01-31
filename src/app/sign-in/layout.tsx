import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default SignInLayout;
