import React from "react";
import { Link, useNavigate } from "react-router-dom";
import notfound from '../assets/images/notfound.png'
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row xs:flex-col justify-center items-center xs:p-5 lg:p-24 lg:gap-20 xs:gap-5">
      <img className="lg:w-[40%]" src={notfound} alt="" />
      <div className="xs:justify-center xs:text-center lg:text-start xs:flex lg:inline-block    flex-col xs:items-center">
        <h1 className="text-secondary font-bold xs:text-7xl lg:text-[100px]">404</h1>
        <p className="xs:text-2xl lg:text-5xl mt-5 leading-snug text-[#5AE4A7]  ">{t("notfound")}</p>
        <div className="mt-16 flex gap-4 text-xl">
          <Link
            to="/"
            className="bg-secondary text-white px-3 py-2  rounded-xl"
          >
            {t("go-home")}
          </Link>
          <Link className="bg-secondary text-white px-3 py-2 rounded-xl">
            <button
              onClick={() => {
                navigate(-1);
              }}
            >{t("go-back")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
