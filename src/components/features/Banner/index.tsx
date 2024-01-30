import Image from "next/image";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import Button from "@/components/common/Button";

const Banner = () => {
  return (
    <section style={{ gridTemplateColumns: "0.4fr 0.6fr" }} className="grid">
      <div className="flex flex-col gap-4 py-16">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
          <Button primary className="!font-semibold">
            Order now
          </Button>
          <Button
            className="!font-semibold"
            endIcon={<FaRegArrowAltCircleRight size={20} />}
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image src="/images/pizza.png" fill objectFit="contain" alt="pizza" />
      </div>
    </section>
  );
};

export default Banner;
