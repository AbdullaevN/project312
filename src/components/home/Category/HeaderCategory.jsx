import React from "react";
import spravochnik from "../../../assets/images/foundation.png";
import uslugi from "../../../assets/images/uslugi.png";
import ob from "../../../assets/images/obyavlenie.png";
import avto from "../../../assets/images/avto.png";
import nedvijimost from "../../../assets/images/nedvijimost.png";
import rabota from "../../../assets/images/rabota.png";
import novosti from "../../../assets/images/novosti.png";
import { Link } from "react-router-dom";

export const HeaderCategory = () => {
  return (
    <div className="flex  flex-wrap p-[1rem] text-black justify-around ">
      <Link to={"/directory"}>
        <div className="flex items-center flex-row gap-2 py-2">
          <span>Справочник</span>
          <img src={spravochnik} alt="" />
        </div>
      </Link>
      <Link to={"/services"}>
        <div className="flex items-center flex-row gap-2 py-2">
          <span>Услуги</span>
          <img src={uslugi} alt="" />
        </div>
      </Link>
      <Link to={"/ads"}>
        <div className="flex items-center gap-2 py-2">
          <span>Объявления</span>
          <img src={ob} alt="" />
        </div>
      </Link>
      <Link to={"/avto"}>
        <div className="flex items-center gap-2 py-2">
          <span>Авто</span>
          <img src={avto} alt="" />
        </div>
      </Link>
      <Link to={"/realty"}>
        <div className="flex items-center flex-row gap-2 py-2">
          <span>Недвижимость</span>
          <img src={nedvijimost} alt="" />
        </div>
      </Link>
      <Link to={"/job"}>
        <div className="flex items-center gap-2 py-2">
          <span>Работа</span>
          <img src={rabota} alt="" />
        </div>
      </Link>
      <Link to={"/news"}>
        <div className="flex items-center flex-row gap-2 py-2">
          <span>Новости</span>
          <img src={novosti} alt="" />
        </div>
      </Link>
    </div>
  );
};
