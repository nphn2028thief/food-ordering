import dynamic from "next/dynamic";

import LazyLoading from "@/components/common/LazyLoading";

const SignUp = dynamic(() => import("@/components/pages/SignUp"), {
  loading: () => <LazyLoading />,
});

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
