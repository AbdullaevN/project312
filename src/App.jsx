import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { MyNavbar } from "./components/navbar/MyNavbar";
import { MyFooter } from "./components/footer/MyFooter";
import { SignUp } from "./pages/signup/SignUp.jsx";
import { Directory } from "./pages/categories/Directory/Directory";
import { Avto } from "./pages/categories/Avto/Avto";

import "bootstrap/dist/css/bootstrap.min.css";

import { Services } from "./pages/categories/Services/Services";
import { Ad } from "./pages/categories/Ad/Ad";
import { Realty } from "./pages/categories/Realty/Realty";
import { News } from "./pages/categories/News/News";
import { Job } from "./pages/categories/Job/Job";
import { HeaderCategory } from "./components/home/Category/HeaderCategory";
import { Contacts } from "./pages/footerLinks/Contacts/Contacts";
import { About } from "./pages/footerLinks/About/About";
import { PrivacyPolicy } from "./pages/footerLinks/PrivacyPolice/PrivacyPolice";
import { PersonalData } from "./pages/footerLinks/PersonalData/PersonalData";
import { AboutPortal } from "./pages/footerLinks/AboutPortal/AboutPortal";
import { CityOrganization } from "./pages/footerLinks/CityOrganization/CityOrganization";
import { Article } from "./pages/footerLinks/Article/Article";
import { NewsPage } from "./pages/footerLinks/News/News";
import { Attraction } from "./pages/footerLinks/Attraction/Attraction";
import { Paid } from "./pages/footerLinks/Paid/Paid";
import { Advertising } from "./pages/footerLinks/Advertising/Advertising";
import { Cooperation } from "./pages/footerLinks/Cooperation/Cooperation";
import { SignIn } from "./pages/signin/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <HeaderCategory />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />

          <Route path={"/directory"} element={<Directory />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/ads"} element={<Ad />} />
          <Route path={"/avto"} element={<Avto />} />
          <Route path={"/realty"} element={<Realty />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/job"} element={<Job />} />

          <Route path={"/about"} element={<About />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          <Route path={"/personal-data"} element={<PersonalData />} />
          <Route path={"/about-portal"} element={<AboutPortal />} />
          <Route path={"/cuty-organization"} element={<CityOrganization />} />
          <Route path={"/articles"} element={<Article />} />
          <Route path={"/news-page"} element={<NewsPage />} />
          <Route path={"/attraction"} element={<Attraction />} />
          <Route path={"/paid"} element={<Paid />} />
          <Route path={"/advertising"} element={<Advertising />} />
          <Route path={"/cooperation"} element={<Cooperation />} />

          <Route path={"/contacts"} element={<Contacts />} />

          {/* category pages */}
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
