import React from "react";
import Banner from "../../features/Banner";
import Menu from "../../features/Menu";
import SectionHeader from "@/components/common/SectionHeader";

const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <section className="my-14">
        <SectionHeader title="About us" />
        <div className="max-w-2xl flex flex-col gap-4 mx-auto mt-6 text-center text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            tempore, non at molestias soluta neque deserunt quo iure sint enim
            minima aperiam quaerat labore, veritatis magnam, consequatur culpa!
            Eveniet, cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            tempore, non at molestias soluta neque deserunt quo iure sint enim
            minima aperiam quaerat labore, veritatis magnam, consequatur culpa!
            Eveniet, cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            tempore, non at molestias soluta neque deserunt quo iure sint enim
            minima aperiam quaerat labore, veritatis magnam, consequatur culpa!
            Eveniet, cumque.
          </p>
        </div>
      </section>

      <section className="my-14">
        <SectionHeader title="Don't hesitate to contact us" />
        <div className="text-xl md:text-2xl text-center mt-6 underline">
          <a href="tel:+84777498646">+84777498646</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
