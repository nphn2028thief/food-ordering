import Link from "next/link";

import { CPath } from "@/constants/path";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={CPath.HOME}
      className={`text-primary text-2xl font-semibold uppercase ${className}`}
    >
      st pizza
    </Link>
  );
};

export default Logo;
