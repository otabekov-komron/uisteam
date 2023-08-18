import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { i18next } from "../assets/icons";
import { useTranslation } from "react-i18next";
import FlagEn from "../assets/icons/icons8-great-britain-96.png";
import FlagRu from "../assets/icons/icons8-russian-federation-96.png";
import FlagUz from "../assets/icons/icons8-uzbekistan-96.png";

import useClickOutside from "../utils/detect";
const Navbar = () => {
  const { i18n, t } = useTranslation();
  const navRef = useRef();

  const hiddenRef = useRef();
  let [open, setOpen] = useState(false);
  const wrapperRef = useRef("menu");
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const languages = [
    { code: "en", label: "EN", flag: FlagEn },
    { code: "ru", label: "RU", flag: FlagRu },
    { code: "uz", label: "UZ", flag: FlagUz },
  ];

  const selectLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setOpen(false);
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-navbar");
    hiddenRef.current.classList.toggle("xs:hidden");
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div
        ref={hiddenRef}
        className="lg:hidden xs:sticky top-0 py-2 xs:flex items-center justify-between w-[100%] text-white px-4 bg-secondary z-[99999]"
      >
        <button onClick={showNavbar}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <Link
          to="/
        "
          className="xs:self-center lg:self-start ms-7"
        >
          <img className="lg:w-24 xs:w-14 " src={logo} alt="" />
        </Link>

        <div
          ref={wrapperRef}
          className="relative"
          onClick={() => setOpen(!open)}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={
                languages.find((lang) => lang.code === selectedLanguage)?.flag
              }
              alt="Selected Flag"
              className="w-6 h-6 rounded-full mr-2"
            />
          </div>
          {open && (
            <ul className="flex flex-col items-center justify-center absolute z-10 mt-2 py-1  bg-secondary rounded shadow">
              {languages.map((language) => (
                <li
                  key={language.code}
                  onClick={() => selectLanguage(language.code)}
                  className="px-1 py-1 cursor-pointer flex items-center"
                >
                  <img
                    src={language.flag}
                    alt="Flag"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="xs:hidden lg:flex lg:flex-row t py-2 lg:px-40 justify-between lg:items-center bg-secondary sticky top-0 border-b-2  z-[999999] flex-wrap">
        <Link
          to="/
        "
          className=""
        >
          <img className="lg:w-24 xs:w-14 " src={logo} alt="" />
        </Link>
        <div className="lg:flex xs:flex-col xs:hidden lg:flex-row items-center gap-8 font-medium  text-lg    text-white">
          <Link className="li" to="/services">
            <h1 className="cool-link">{t("navbar-1")}</h1>
          </Link>
          <Link className="li" to="/portfolio">
            <h1 className="cool-link">{t("navbar-2")}</h1>
          </Link>
          <Link className="li" to="/about">
            <h1 className="cool-link">{t("navbar-3")}</h1>
          </Link>
          <Link className="li" to="/blog">
            <h1 className="cool-link">{t("navbar-4")}</h1>
          </Link>
          <h1>
            <span className="text-[#ffffff69] ">+998 95</span> 240 51 11
          </h1>
          <div className="box-lang w-7">
            <div className="lang-icon flex items-center  justify-center ">
              <img className="i18n w-[15vh]" src={i18next} alt="" />
            </div>
            <div className="en-cont lang-cont text-sm xs:hidden">
              <button
                onClick={() => changeLang("en")}
                className={`language-button ${
                  i18n.language === "en" ? "active" : ""
                }`}
              >
                EN
              </button>
            </div>
            <div className="ru-cont lang-cont text-sm">
              <button
                onClick={() => changeLang("ru")}
                className={`language-button ${
                  i18n.language === "ru" ? "active" : ""
                }`}
              >
                RU
              </button>
            </div>
            <div className="uz-cont lang-cont text-sm">
              <button
                onClick={() => changeLang("uz")}
                className={`language-button ${
                  i18n.language === "uz" ? "active" : ""
                }`}
              >
                UZ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="fixed top-0 left-0 h-[100%] w-[100%] duration-[1s] translate-x-[-100vh] bg-secondary xs:flex flex-col lg:hidden items-center text-white pt-5 z-[9999999]"
      >
        <button onClick={showNavbar}>
          <i class="fa fa-times relative left-40" aria-hidden="true"></i>
        </button>
        <img className="w-14" src={logo} alt="" />
        <h1 className="font-semibold pt-4">UNITED IT SERVICE</h1>
        <div className="flex flex-col gap-6 text-xl items-center pt-12">
          <Link onClick={showNavbar} className="" to="/services">
            <h1 className="p-1 px-10 rounded-3xl active:bg-white active:text-secondary ">
              {t("navbar-1")}
            </h1>
          </Link>
          <Link onClick={showNavbar} className="" to="/portfolio">
            <h1 className="p-1 px-10 rounded-3xl active:bg-white active:text-secondary">
              {t("navbar-2")}
            </h1>
          </Link>
          <Link onClick={showNavbar} className="" to="/about">
            <h1 className="p-1 px-10 rounded-3xl active:bg-white active:text-secondary">
              {t("navbar-3")}
            </h1>
          </Link>
          <Link onClick={showNavbar} className="" to="/blog">
            <h1 className="p-1 px-10 rounded-3xl active:bg-white active:text-secondary">
              {t("navbar-4")}
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 pt-36 ">
          <h1>{t("service-6")}</h1>
          <h1>
            <span className="text-[#ffffff69] ">+998 95</span> 240 51 11
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
