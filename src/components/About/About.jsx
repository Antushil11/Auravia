import React from "react";
import Container from "../../Container/Container";

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-2">
        <div className="max-w-[1500px] mx-auto col-span-1 flex flex-col items-start gap-4">
          <h1 className="text-6xl tinos-regular  text-neutral ">
            About Auravia
          </h1>
          <h2 className="text-4xl tinos-regular text-neutral-content">
            Luxury Skincare Crafted with Care
          </h2>
          <p className="text-accent-content tinos-regular text-xl ">
            Autavia blends nature and science to create exceptional skincare
            products that nourish and transform your skin. Our commitment to
            quality, sustainability, and innovation drives us to deliver
            effective solutions that enhance your natural beauty. Experience the
            difference with Auravia, where every product is crafted with care to
            help you achieve radiant, healthy skin.
          </p>

          <button className="btn text-white mr-2 md:mt-0 mt-4 p-6 tinos-regular text-xl px-10 bg-linear-to-r from-secondary-content to-accent-content rounded-xl">
            Learn More
          </button>
        </div>
        <div className="col-span-1">
          <div className="relative w-full    ">
          <img
            className="h-full z-80 w-full absolute  "
            src="../../../public/image/flower.png"
            alt=""
          />
          <div className="flex items-end relative">
            <img
              className="max-h-11/12 md:ml-14 z-100 md:max-w-96"
              src="../../../public/image/product 1 .png"
              alt=""
            />

            <img
              className="max-h-11/12 absolute md:ml-40   z-100 md:max-w-96 "
              src="../../../public/image/product 2.png"
              alt=""
            />
            <img
              className="max-h-96 absolute  z-100 md:max-w-96 "
              src="../../../public/image/product 3.png"
              alt=""
            />
          </div>
        </div>
          
        </div>
      </div>
    </Container>
  );
};

export default About;
