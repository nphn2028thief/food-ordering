import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const Home = dynamic(() => import("@/components/pages/Home"), {
  loading: () => <LazyLoading />,
});

const HomePage = () => {
  return <Home />;
};

export default HomePage;
