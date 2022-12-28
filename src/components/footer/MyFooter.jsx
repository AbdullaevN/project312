import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

export const MyFooter = () => {
  return (
    <>
      <footer className="footer-1 bg-[#111111] py-8 sm:py-12 font-nunito text-white">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-2 mt-4 sm:w-1/2 xl:w-1/5 md:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
              {/* <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left"></h5> */}
              <div className="flex sm:justify-center xl:justify-start">
                <img src={footerLogo} alt="" />
                {/* <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i className="fab fa-discord"></i>
                </a> */}
              </div>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 text-white">
              <h5 className="text-xl font-bold mb-6">О ПОРТАЛЕ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    to={"/about"}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-white text-xs"
                  >
                    О НАС
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/provicy"}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    О ПОРТАЛЕ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">ПОЛЬЗОВАТЕЛЯМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ОРГАНИЗАЦИЯ ГОРОДА
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ИНТЕРЕСНЫЕ СТАТЬИ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    НОВОСТИ ГОРОДА
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ДОСТОПРИМЕЧАТЕЛЬНОСТИ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">ПАРТНЕРАМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    ПЛАТНОЕ РАЗМЕЩЕНИЕ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    РЕКЛАМА НА САЙТЕ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    СОТРУДНИЧЕСТВО
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    КОНТАКТЫ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">МЫ В СОЦ.СЕТЯХ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-xs"
                  >
                    FACEBOOK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
