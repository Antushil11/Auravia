import React from "react";
import Container from "../../Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="md:flex items-center bg-gradient-to-r from-[#f6eee7] via-[#efe1d4] to-[#e6d1bf] justify-center gap-40 border-2 border-amber-800">
        <div className="gap-4 w-full max-h-full flex flex-col items-center justify-center">
          <h1 className="text-6xl tinos-regular  text-neutral ">Auravia</h1>
          <h4 className="text-4xl tinos-regular text-neutral-content">Glow with Elegance</h4>
          <p className="text-accent-content tinos-regular text-xl text-center" >Discover Luxurious Skincare & Beauty Products</p>

          <button className="btn text-white p-6 tinos-regular text-xl px-10 bg-linear-to-r from-secondary-content to-accent-content rounded-2xl">Shop Now</button>
        </div>

        
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
    </Container>
  );
};

export default Banner;
