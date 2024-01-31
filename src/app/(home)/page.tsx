import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const Home = dynamic(() => import("@/components/pages/Home"), {
  loading: () => <Loading />,
});

const HomePage = () => {
  return <Home />;
};

export default HomePage;
