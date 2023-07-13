import React from "react";

import { Link } from "react-router-dom";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../assets/images";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 items-center xs:py-10 lg:py-20">
      <h1 className="text-blackText lg:text-3xl xs:text-base font-semibold xs:pb-5 lg:pb-10">
        {t("services-title")}
      </h1>
      <div className="grid grid-cols-2 xs:gap-4 lg:gap-20 text-white">
        <Link to="/about-website" className="card">
          <div className="container-card">
            <img src={service1} alt="" />
            <div className="content">
              <h1>{t("service-1")}</h1>
              <Link className="flex items-center gap-2" to="/about-website">
                <h1>{t("learn-more")}</h1>
                <i class="fa fa-arrow-circle-right pt-1" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/about-crm" className="card">
          <div className="container-card">
            <img src={service2} alt="" />
            <div className="content">
              <h1>CRM</h1>
              <Link className="flex items-center gap-2" to="/about-crm">
                {t("learn-more")}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/about-shop" className="card">
          <div className="container-card">
            <img src={service3} alt="" />
            <div className="content">
              <h1>{t("service-3")}</h1>
              <Link className="flex items-center gap-2" to="/about-shop">
                {t("learn-more")}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/about-apps" className="card">
          <div className="container-card">
            <img src={service4} alt="" />
            <div className="content">
              <h1>{t("service-4")}</h1>
              <Link className="flex items-center gap-2" to="/about-apps">
                {t("learn-more")}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/about-tgbot" className="card">
          <div className="container-card">
            <img src={service5} alt="" />
            <div className="content">
              <h1>{t("service-5")}</h1>
              <Link className="flex items-center gap-2" to="/about-tgbot">
                {t("learn-more")}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Link>
        <a href="https://t.me/support_uis" className="card">
          <div className="container-card">
            <img src={service6} alt="" />
            <div className="content">
              <h1>{t("service-6")}</h1>
              <a
                className="flex items-center gap-2"
                href="https://t.me/uis_support_bot"
              >
                {t("learn-more")}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Services;
