import Link from "next/link";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  replace?: boolean;
  primary?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Button = (props: IProps) => {
  const {
    href,
    replace = false,
    primary = false,
    startIcon,
    endIcon,
    children,
    style,
    className,
    ...rest
  } = props;

  let Component: ElementType = "button";
  const backgroundColor = primary ? "text-white bg-primary" : "";
  const _props = {
    href,
    replace,
  };

  if (href) {
    Component = Link;
  }

  return (
    <Component
      {..._props}
      style={{
        transition: "all 0.3s ease",
        ...style,
      }}
      className={`flex justify-center items-center gap-3 font-normal ${backgroundColor} px-[42px] py-3 rounded-[30px] hover:opacity-80 ${className}`}
      {...rest}
    >
      {startIcon && <span className="flex">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex">{endIcon}</span>}
    </Component>
  );
};

export default Button;
