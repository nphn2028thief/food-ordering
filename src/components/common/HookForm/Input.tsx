import { InputHTMLAttributes, useState } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { ErrorMessage } from "@hookform/error-message";

interface IProps<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "number" | "password";
  label: string;
  htmlFor: T;
  placeholder: string;
  className?: string;
  register?: UseFormRegisterReturn<T>;
  errors?: FieldErrors;
}

const Input = <T extends string>(props: IProps<T>) => {
  const {
    type = "text",
    label,
    htmlFor,
    placeholder,
    className,
    register,
    errors,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-medium">
        {label}
      </label>
      <div
        className={`flex items-center p-4 rounded-lg border border-solid border-secondary-2 ${className}`}
      >
        <input
          type={showPassword ? "text" : type}
          id={htmlFor}
          placeholder={placeholder}
          className="w-full"
          {...register}
          {...rest}
        />
        {type === "password" && (
          <span
            className="flex p-2 pl-3 -mr-2 -my-2 text-eye cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <BsFillEyeFill size={20} />
            ) : (
              <BsFillEyeSlashFill size={20} />
            )}
          </span>
        )}
      </div>

      {errors && (
        <ErrorMessage
          name={htmlFor}
          errors={errors}
          render={({ message }) => (
            <p className="text-primary text-sm">{message}</p>
          )}
        />
      )}
    </div>
  );
};

export default Input;
