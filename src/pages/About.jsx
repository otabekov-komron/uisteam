import React, { useState } from "react";
import rectangle from "../assets/images/Rectangle 99.png";
import rectangle100 from "../assets/images/Rectangle 100.png";
import rectangle101 from "../assets/images/Rectangle 101.png";
import "./About.css";
import { logoSmall } from "../assets/images";
import { useTranslation } from "react-i18next";
import axios from "axios";

const About = () => {
  const { t } = useTranslation();

  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const telegramBotToken = "6009666371:AAHJ2JV-QrHQpV3pKNRgQj4cps3ZQofY7N4";
      const chatId = "-1001869878240";

      const text = `New Contact Form Submission:
        Company Name: ${companyName}
        Name: ${name}
        Phone: ${phone}
        Project Type: ${projectType}
        Project Description: ${projectDescription}`;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );

      setCompanyName("");
      setName("");
      setPhone("");
      setProjectType("");
      setProjectDescription("");

      alert("All data sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {/* Web-site start  */}

      <div className="flex justify-center items-center flex-wrap mx-auto my-10">
        <section className="flex flex-col gap-2">
          <div className="flex text-center justify-center items-center xs:max-w-screen-xs lg:max-w-[1240px] mx-auto px-4  lg:my-6">
            <h1 className="lg:text-3xl xs:text-xl leading-10 font-semibold lg:py-4">
              {t("about-us")}
            </h1>
          </div>

          <div className=" flex lg:flex-row xs:flex-col justify-between items-center lg:mx-48 xs:gap-0 lg:gap-40">
            <div className=" flex justify-between items-center my-10 ">
              <p className="text-justify xs:max-w-[360px] xs:px-2  lg:max-w-[1600px] xs:text-base  xs:font-medium  lg:font-normal lg:text-2xl leading-9">
                <img
                  className="xs:w-14 lg:w-36 float-left lg:px-5 lg:ps-10 xs:px-2 lg:py-0 "
                  src={logoSmall}
                  alt=""
                />
                {t("about")}
              </p>
            </div>
            <img className="xs:max-w-screen-xs" src={rectangle} alt="" />
          </div>

          <div className="flex xs:flex-col-reverse  lg:flex-row justify-between items-center  lg:mx-48 lg:my-14 xs:gap-10 lg:gap-24">
            <img src={rectangle100} alt="" className="xs:max-w-screen-xs " />
            <p className="xs:pt-4 text-justify xs:max-w-[360px] xs:px-2  lg:max-w-[1600px] xs:text-base  xs:font-medium  lg:font-normal lg:text-2xl leading-9">
              {t("about-2")}
            </p>
          </div>
          <div className="flex xs:flex-col lg:flex-row justify-between items-center xs:gap-5 lg:gap-40 lg:mx-48">
            <p className="xs:pt-4 text-justify xs:max-w-[360px] xs:px-2  lg:max-w-[1600px] xs:text-base  xs:font-medium  lg:font-normal lg:text-2xl leading-9">
              {t("about-3")}
            </p>
            <img src={rectangle101} alt="" className="xs:max-w-screen-xs " />
          </div>
          <div className=" flex xs:flex-col lg:flex-row justify-center items-center xs:gap-5 lg:gap-40 lg:mx-48">
            <p className="xs:pt-4  xs:max-w-[360px] xs:px-2  lg:max-w-[1600px] xs:text-base lg:text-2xl leading-9 font-bold lg:mt-20 ">
              {t("about-4")}
            </p>
          </div>

          <div className="flex lg:flex-row xs:flex-col justify-center items-center my-10">
            <div className="lg:max-w-[1090px] xs:max-w-screen-xs bg-secondary rounded-[16px]">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 mb-14 xs:px-5 lg:p-10 my-12 lg:mx-5 sm:grid-cols-2">
                  <div className="my-2">
                    <label
                      htmlFor="Kompaniya nomini"
                      className="block mb-2 lg:text-lg xs:text-sm lg:mx-5 font-medium text-white dark:text-white"
                    >
                      {t("form-company")}
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="border border-gray-300 text-black text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 block lg:w-[432px] xs:w-[300px]   lg:h-[46px] p-2.5"
                      placeholder={t("form-company-pl")}
                    />
                    {message && <p className=" text-red-500">{message}</p>}
                  </div>
                  <div className="lg:my-2 lg:mx-5">
                    <label
                      htmlFor="Ismingizni yozing"
                      className="block mb-2 lg:text-lg xs:text-sm lg:mx-5 font-medium text-white dark:text-white "
                    >
                      {t("form-surname")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-gray-300 text-black text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 block lg:w-[432px] xs:w-[300px]   lg:h-[46px] p-2.5"
                      placeholder={t("form-surname-pl")}
                    />
                    {message && <p className=" text-red-500">{message}</p>}
                  </div>
                  <div className="lg:my-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 lg:text-lg xs:text-sm lg:mx-5 font-medium text-white dark:text-white "
                    >
                      {t("form-telephone")}
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-gray-300 text-black text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 block lg:w-[432px] xs:w-[300px]   lg:h-[46px] p-2.5"
                      placeholder={t("form-telephone-pl")}
                    />
                    {message && <p className=" text-red-500">{message}</p>}
                  </div>
                  <div className="lg:my-6 lg:mx-5">
                    <label
                      htmlFor="category"
                      className="block mb-2 lg:text-lg xs:text-sm lg:mx-5 font-medium text-white dark:text-white "
                    >
                      {t("form-type")}
                    </label>
                    <div className="select-wrapper ">
                      <select
                        id="projectType"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="border border-gray-300 text-black text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 block lg:w-[432px] xs:w-[300px]   lg:h-[46px] p-2.5 select-dropdown"
                        placeholder="Web-saytlar"
                      >
                        {message && <p className=" text-red-500">{message}</p>}
                        <option
                          className="xs:text-xs lg:text-base"
                          selected={t("service-1")}
                        >
                          {t("service-1")}
                        </option>
                        <option className="xs:text-xs lg:text-base" value="CRM">
                          CRM
                        </option>
                        <option
                          className="lg:text-base  xs:text-xs"
                          value={t("type-2")}
                        >
                          {t("type-2")}
                        </option>
                        <option
                          className="xs:text-xs lg:text-base"
                          value={t("service-3")}
                        >
                          {t("service-3")}
                        </option>
                        <option
                          className="xs:text-xs lg:text-base"
                          value={t("service-4")}
                        >
                          {t("service-4")}
                        </option>
                        <option
                          className="xs:text-xs lg:text-base"
                          value={t("service-5")}
                        >
                          {t("service-5")}
                        </option>
                        <option
                          className="xs:text-xs lg:text-base"
                          value={t("type-5")}
                        >
                          {t("type-5")}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="Loyiha haqida"
                      className="block mb-2 lg:text-lg xs:text-sm lg:mx-5 font-medium text-white dark:text-white "
                    >
                      {t("form-about")}
                    </label>
                    <textarea
                      id="projectDescription"
                      rows="5"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="block p-2.5 text-sm text-black xs:w-full lg:w-[950px] h-[115px] bg-gray-50 rounded-[6px] border border-gray-300 focus:ring-primary-500"
                      placeholder={`${t("form-about-pl")}...`}
                    ></textarea>
                    {message && <p className=" text-red-500">{message}</p>}
                  </div>
                </div>
                <div className="flex xs:justify-center xs:-mt-6 xs:pb-10 lg:justify-end lg:items-end lg:mx-20 lg:relative lg:bottom-14">
                  <button
                    type="submit"
                    className=" xs:w-[300px] lg:w-[200px] xs:p-2 lg:h-[47px] bg-white rounded-[6px] text-secondary lg:hover:bg-secondary lg:hover:text-white lg:hover:border-2 transition duration-150 ease-out lg:hover:ease-in font-semibold lg:self-end "
                    onClick={handleSubmit}
                  >
                    {t("form-btn")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
