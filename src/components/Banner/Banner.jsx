import React from "react";
import Container from "../../Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div>
          <h1>Auravia</h1>
          <h4>Glow with Elegance</h4>
          <p>Discover Luxurious Skincare & Beauty Products</p>
        </div>

        
          <div className="">
            <img
              className="max-h-60 w-96"
              src="../../../public/image/flower.png"
              alt=""
            />
            <div className="flex">
              <img
                className="max-h-60 w-96"
                src="../../../public/image/product 1 .png"
                alt=""
              />
              <img
                className="max-h-60 w-96"
                src="../../../public/image/product 2.png"
                alt=""
              />
              <img
                className="max-h-60 w-96"
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
