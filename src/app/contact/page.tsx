import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const Contact = dynamic(() => import("@/components/pages/Contact"), {
  loading: () => <LazyLoading />,
});

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
