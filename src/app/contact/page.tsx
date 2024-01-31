import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const Contact = dynamic(() => import("@/components/pages/Contact"), {
  loading: () => <Loading />,
});

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
