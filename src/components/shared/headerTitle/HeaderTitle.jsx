import React from "react";
import arrow from "../../../assets/images/arrowOrange.png";

export const HeaderTitle = () => {
  return (
    <>
      <div className="flex justify-between px-9">
        <div className="text-black font-bold">БИЗНЕС-ПРОФИЛИ</div>
        <div className="text-orange-400 flex justify-between gap-3">
          Все профили
          <img src={arrow} className="object-contain" alt="" />
        </div>
      </div>
    </>
  );
};
