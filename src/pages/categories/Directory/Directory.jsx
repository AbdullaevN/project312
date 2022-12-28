import React from "react";
import { BeginSearch } from "../../../components/shared/beginSearch/BeginSearch";
import "./directory.css";

export const Directory = () => {
  return (
    <>
      <div class="">
        <div class="">
          <div class="img-wrap">
            <img
              src="https://fotorelax.ru/wp-content/uploads/2020/06/bishkek-s-vysoty-stolica-u-podnozhja-gor-9856615.jpg"
              className="img-responsive w-full object-cover"
            />
            <h1 className="font-bold text-3xl font-montserrat">КАТАЛОГ</h1>
          </div>
        </div>
      </div>
      <BeginSearch />
    </>
  );
};
