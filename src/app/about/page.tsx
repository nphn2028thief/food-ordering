import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const About = dynamic(() => import("@/components/pages/About"), {
  loading: () => <Loading />,
});

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
