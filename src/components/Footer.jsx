import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary py-10  lg:pt-20 px-4 flex flex-col text-white">
      <div className="flex xs:flex-col lg:flex-row justify-around lg:border-b-2 pb-8">
        <div className="flex flex-col gap-8">
          <img
            className="lg:w-24 lg:ms-10 xs:w-24 xs:self-center lg:self-start "
            src={logo}
            alt=""
          />
          <div className="buttons text-2xl flex xs:justify-center lg:justify-normal items-center gap-2">
            <a className="hover" href="https://t.me/uis_team">
              <i
                class="fa fa-telegram before:bg-transparent p-[9px] border-2 rounded-full  transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text "
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://instagram.com/uis.team?igshid=MzRlODBiNWFlZA=="
            >
              <i
                class="fa fa-instagram before:bg-transparent px-2.5 py-2 border-2 rounded-full  transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://instagram.com/uis.team?igshid=MzRlODBiNWFlZA==">
              <i
                class="fa fa-facebook before:bg-transparent px-3 py-2 border-2 rounded-full  transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://t.me/uis_team">
              <i
                class="fa fa-twitter before:bg-transparent px-2 py-2 border-2 rounded-full  transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/united-it-service-2839b0277/">
              <i
                class="fa fa-linkedin before:bg-transparent px-2 py-2 border-2 rounded-full transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text"
                aria-hidden="true"
              ></i>
            </a>
            <a href="mailto:uniteditservice2022@gmail.com">
              <i
                class="fa fa-at before:bg-transparent px-2 py-2 border-2 rounded-full  transition duration-200  ease-out hover:ease-in hover:text-text hover:border-text"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div className="flex font-medium xs:sel-center xs:justify-center lg:justify-normal text-lg xs:pb-10">
            <h1>
              {t("for-contact")}
              <span>
                <span className="text-[#ffffff69] ">+998 95</span> 240 51 11
              </span>
            </h1>
          </div>
        </div>
        <div className="flex xs:gap-12 lg:gap-24 xs:justify-around lg:justify-normal">
          <div className="flex flex-col items-start gap-2 lg:text-lg">
            <h1 className="xs:text-xl lg:text-3xl pb-2">{t("pages")}</h1>
            <Link to="/services">{t("navbar-1")}</Link>
            <Link to="/portfolio">{t("navbar-2")}</Link>
            <Link to="/about">{t("navbar-3")}</Link>
            <Link to="/blog">{t("navbar-4")}</Link>
            <a href="tel:+998952405111">{t("contact")}</a>
          </div>
          <div className="flex flex-col items-start gap-2 lg:text-lg">
            <h1 className="xs:text-xl lg:text-3xl pb-2">{t("navbar-1")}</h1>
            <Link to="/about-website">{t("service-1")}</Link>
            <Link to="/about-crm">CRM</Link>
            <Link to="/about-shop">{t("service-3")}</Link>
            <Link to="/about-apps">{t("service-4")}</Link>
            <Link to="/about-tgbot">{t("service-5")}</Link>
          </div>
        </div>
      </div>
      <div className="xs:text-center lg:text-start flex xs:flex-col-reverse xs:gap-4 lg:flex-row items-center pt-5 lg:px-20 justify-between">
        <a href="https://ok-web.uz" className=" xs:pt-4 -mb-4 xs:text-xs xs::text-[10px] lg:text-base xs:border-t-2 lg:border-none">
          {t("copyright")}
        </a>
        <a
          href="https://goo.gl/maps/CCJvETBxjMQjLEyx8?coh=178572&entry=tt"
          className="border-2 p-2 rounded-lg hover:text-secondary hover:bg-white font-medium xs:text-sm lg:text-base"
        >
          {t("address")}
        </a>
      </div>
    </div>
  );
};

export default Footer;
