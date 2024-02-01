import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const About = dynamic(() => import("@/components/pages/About"), {
  loading: () => <LazyLoading />,
});

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
