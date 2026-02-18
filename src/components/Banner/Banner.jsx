import React from "react";
import Container from "../../Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="flex items-center justify-center border-2 border-amber-800">
        <div className="border-2 border-amber-800 h-96 flex flex-col items-center justify-center">
          <h1 className="text-4xl ">Auravia</h1>
          <h4>Glow with Elegance</h4>
          <p>Discover Luxurious Skincare & Beauty Products</p>

          <button className="btn">Shop Now</button>
        </div>

        
          <div className="">
            <img 
              className="max-h-60 w-96 ml-60 border-2 border-amber-800"
              src="../../../public/image/flower.png"
              alt=""
            />
            <div className="flex">
              <img
                className="max-h-60 w-96 border-2 border-amber-800"
                src="../../../public/image/product 1 .png"
                alt=""
              />
              <img
                className="max-h-60 w-96 border-2 border-amber-800"
                src="../../../public/image/product 2.png"
                alt=""
              />
              <img
                className="max-h-60 w-96 border-2 border-amber-800"
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
