import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const SignIn = dynamic(() => import("@/components/pages/SignIn"), {
  loading: () => <LazyLoading />,
});

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;
