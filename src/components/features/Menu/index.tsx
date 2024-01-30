import Image from "next/image";
import React from "react";

import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";

const Menu = () => {
  return (
    <section>
      <SectionHeader title="menu" />

      <div className="absolute left-0 right-0">
        <div className="absolute left-0 -top-[152px] -z-[1]">
          <Image
            src="/images/salad1.png"
            width={109}
            height={189}
            objectFit="contain"
            alt="salad1"
          />
        </div>
        <div className="absolute right-0 -top-56 -z-[1]">
          <Image
            src="/images/salad2.png"
            width={107}
            height={195}
            objectFit="contain"
            alt="salad1"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            style={{
              transition: "all 0.3s ease",
            }}
            className="p-5 rounded-lg shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-center mb-2">
              <Image
                src="/images/pizza.png"
                width={160}
                height={160}
                alt="pizza"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h4 className="font-semibold capitalize">pepperoni pizza</h4>
              <p className="text-gray-500 text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <Button primary className="!w-full lg:!w-[75%]">
                Add to cart $12
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
