"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import Input from "@/components/common/HookForm/Input";
import Button from "@/components/common/Button";
import { CPath } from "@/constanst/path";
import { ISignUp } from "@/type/auth";

const schema = Yup.object({
  displayName: Yup.string().required("Display name is required!"),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password must match with password!")
    .required("Confirm password is required!"),
});

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUp>({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ISignUp) => {
    console.log(data);
    const id = toast.loading("Waiting for sign in...", {});

    setTimeout(() => {
      toast.update(id, {
        render: "Sign in successfully!",
        type: "success",
        isLoading: false,
      });
    }, 2000);
  };

  return (
    <section className="flex flex-col justify-center items-center pt-9 md:pt-20 pb-9 md:pb-0">
      <h1 className="text-3xl font-semibold text-primary">Sign Up</h1>
      <form
        className="max-w-[420px] w-full flex flex-col gap-6 mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Display Name"
          htmlFor="displayName"
          placeholder="E.g: Nhan Nguyen"
          register={register("displayName")}
          className="!py-3"
          errors={errors}
        />
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
        <Input
          type="password"
          label="Confirm password"
          htmlFor="confirmPassword"
          placeholder="E.g: Nhan Nguyen"
          register={register("confirmPassword")}
          className="!py-3"
          errors={errors}
        />
        <Button primary>Submit</Button>
        <p>
          Already have an account?{" "}
          <Link
            href={CPath.SIGNIN}
            replace
            className="underline underline-offset-2"
          >
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
