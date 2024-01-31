import { ReactNode } from "react";

import MainLayout from "@/layouts/MainLayout";

const ContactLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default ContactLayout;
