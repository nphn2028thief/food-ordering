import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const SignIn = dynamic(() => import("@/components/pages/SignIn"), {
  loading: () => <Loading />,
});

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;
