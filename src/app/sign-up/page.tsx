import dynamic from "next/dynamic";

import Loading from "@/components/common/Loading";

const SignUp = dynamic(() => import("@/components/pages/SignUp"), {
  loading: () => <Loading />,
});

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
