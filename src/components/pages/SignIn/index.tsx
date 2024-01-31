"use client";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";

import Input from "@/components/common/HookForm/Input";
import { ISignIn } from "@/type/auth";
import Button from "@/components/common/Button";
import Link from "next/link";
import { CPath } from "@/constanst/path";

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

  const onSubmit = (data: ISignIn) => {
    console.log(data);
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
          Google
        </Button>
      </form>
    </section>
  );
};

export default SignIn;
