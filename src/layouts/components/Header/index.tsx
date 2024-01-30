import Link from "next/link";

import { CPath } from "@/constanst/path";
import Button from "../../../components/common/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link
        href={CPath.HOME}
        className="text-primary text-2xl font-semibold uppercase"
      >
        st pizza
      </Link>

      <nav className="flex text-gray-500 font-semibold">
        <Link href={""} className="px-8 py-2 capitalize">
          home
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          menu
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          about
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          contact
        </Link>

        <Button primary className="!px-8 !py-2 !font-semibold">
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Header;
