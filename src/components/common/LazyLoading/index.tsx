import Image from "next/image";
import Logo from "../Logo";

const LazyLoading = () => {
  return (
    <div className="fixed inset-0 bg-white z-[99999]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[100vw] flex justify-center items-center px-4">
          <Logo className="text-2xl md:text-3xl" />
          <Image
            src="/images/quarter-of-pizza.png"
            alt="lazy loading img"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default LazyLoading;
