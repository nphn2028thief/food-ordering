import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const Menu = dynamic(() => import("@/components/pages/Menu"), {
  loading: () => <Loading />,
});

const MenuPage = () => {
  return <Menu />;
};

export default MenuPage;
