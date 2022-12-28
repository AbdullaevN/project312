import React from "react";
import { CarouselOne } from "../../components/home/Carousel1/CarouselOne";
import { CarouselFooter } from "../../components/home/CarouselFooter";
import { HeaderCategory } from "../../components/home/Category/HeaderCategory";
import { Recommendation } from "../../components/home/Recommendation/Recommendation";

export const HomePage = () => {
  return (
    <>
      {/* <HeaderCategory /> */}
      <CarouselOne />
      <Recommendation />
      <CarouselFooter />
    </>
  );
};
