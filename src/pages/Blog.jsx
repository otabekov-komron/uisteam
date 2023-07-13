import React from "react";
import smile from "../assets/icons/smile.png"
import { useTranslation } from "react-i18next";

const Blog = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col items-center pt-20 pb-48  justify-center">
      <h1 className="font-semibold xs:text-xl lg:text-3xl pb-40">{t("blogs")}</h1>
      <div className="flex gap-4 items-center justify-center">
        <h1 className="text-gray-400 lg:text-4xl">{t("blog-msg")}</h1>
        <img className="xs:w-8 lg:w-12" src={smile} alt="" />
      </div>
    </div>
  );
};

export default Blog;
