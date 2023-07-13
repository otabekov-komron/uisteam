import React from "react";
import { useTranslation } from "react-i18next";

const OnlineShop = () => {
  const {t} = useTranslation()
  return (
    <div className="lg:my-20 xs:my-10 mb-32 flex items-center justify-center flex-col gap-10">
      <h1 className="font-semibold xs:text-xl lg:text-3xl">
        {t("why")}{t("service-3")}?
      </h1>
      <div className="lg:max-w-6xl p-6 border-2 xs:max-w-screen-xs text-justify">
        {t("about-shop")}
      </div>
    </div>
  );
};

export default OnlineShop;
