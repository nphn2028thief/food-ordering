"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import Input from "@/components/common/HookForm/Input";
import Button from "@/components/common/Button";
import { CPath } from "@/constanst/path";
import { useAppDispatch } from "@/lib/hooks";
import { setIsLoading } from "@/lib/features/loading/loadingSlice";
import { ISignIn } from "@/type/auth";

const schema = Yup.object({
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: ISignIn) => {
    console.log(data);

    const id = toast.loading("Waiting for sign in...", {});
    dispatch(setIsLoading(true));

    setTimeout(() => {
      toast.update(id, {
        render: "Sign in successfully!",
        type: "success",
        isLoading: false,
      });

      dispatch(setIsLoading(false));
    }, 2000);
  };

  return (
    <section className="flex flex-col justify-center items-center pt-9 md:pt-20">
      <h1 className="text-3xl font-semibold text-primary">Sign In</h1>
      <form
        className="max-w-[420px] w-full flex flex-col gap-6 mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Email"
          htmlFor="email"
          placeholder="E.g: Nhan Nguyen"
          register={register("email")}
          className="!py-3"
          errors={errors}
        />
        <Input
          type="password"
          label="Password"
          htmlFor="password"
          placeholder="E.g: Nhan Nguyen"
          register={register("password")}
          className="!py-3"
          errors={errors}
        />
        <Button primary>Submit</Button>
        <p>
          New user?{" "}
          <Link
            href={CPath.SIGNUP}
            replace
            className="underline underline-offset-2"
          >
            Sign up
          </Link>
        </p>

        <div className="text-center -mt-5">----- Or -----</div>

        <Button
          className="shadow-google-btn"
          startIcon={<FcGoogle size={24} />}
        >
          Sign in with Google
        </Button>
      </form>
    </section>
  );
};

export default SignIn;
