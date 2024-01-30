import Link from "next/link";
import { CSSProperties, ElementType, ReactNode } from "react";

interface IProps {
  href?: string;
  replace?: boolean;
  primary?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  const {
    href,
    replace = false,
    primary = false,
    startIcon,
    endIcon,
    disabled,
    children,
    style,
    className,
    onClick,
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
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className="flex">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex">{endIcon}</span>}
    </Component>
  );
};

export default Button;
