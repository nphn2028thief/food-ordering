import Link from "next/link";

import { CPath } from "@/constanst/path";

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
        <Link
          href={""}
          className="px-8 py-2 bg-primary text-white rounded-full capitalize"
        >
          login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
