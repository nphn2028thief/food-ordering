import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const Menu = dynamic(() => import("@/components/pages/Menu"), {
  loading: () => <LazyLoading />,
});

const MenuPage = () => {
  return <Menu />;
};

export default MenuPage;
