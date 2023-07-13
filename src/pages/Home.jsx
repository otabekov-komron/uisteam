import React, { useState } from "react";
import {
  astrum,
  bahraLogo,
  evomed,
  homeImg,
  img1,
  img2,
  img3,
  itpark,
  logoBig,
  logoSmall,
  tc,
} from "../assets/images";
import {
  blackMarket,
  blackPc,
  blackPhone,
  blueMarket,
  bluePc,
  call,
  crmicon,
  dt1pc,
  dt1phone,
  dt2blackCrm,
  dt2blueCrm,
  dt2pc,
  dt2phone,
  dt3pc,
  dt4pc,
  dtBlackCrm,
  dtMarket,
  tg,
} from "../assets/icons";
import { useTranslation } from "react-i18next";
import SimpleSlider from "../components/Courusel";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_TELEGRAM_BOT_TOKEN' and 'YOUR_CHAT_ID' with your actual bot token and chat ID
      const telegramBotToken = "6009666371:AAHJ2JV-QrHQpV3pKNRgQj4cps3ZQofY7N4";
      const chatId = "-1001869878240";

      const text = `New Contact Form Submission:\n\nName: ${name}\nMessage: ${message}`;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );

      // Reset form fields
      setName("");
      setMessage("");

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex xs:flex-col lg:flex-row items-center">
        <img className="homeimg object-fill lg:w-[60%] " src={homeImg} alt="" />

        <div className="flex flex-col xs:px-5 ">
          <div className="lg:text-[38px] xs:text-[30px] justify-center text-secondary font-bold lg:px-0 flex text-start flex-col lg:gap-6 lg:pt-40 xs:pt-5">
            <h1>{t("home-text-1")}</h1>
            <div className="animated-text xs:text-[33px] lg:text-[50px]">
              <h1 className="text-text lg:ps-5">{t("text-anim-1")}</h1>
              <h1 className="text-text lg:ps-5">{t("text-anim-2")}</h1>
              <h1 className="text-text lg:ps-5">{t("text-anim-3")}</h1>
            </div>
            <h1 className="lg:ps-14">{t("home-text-2")}</h1>
          </div>
          <div className="flex lg:flex-row xs:flex-col gap-5 font-[500] lg:items-center lg:justify-end xs:pt-20">
            <Link
              to="/portfolio"
              className=" hover:bg-secondary hover:text-white flex justify-center items-center gap-5 border-secondary border-[2px] rounded-md text-xl  text-secondary   px-4 py-2"
            >
              {t("portfolio")} <i class="fa fa-regular fa-arrow-right"></i>
            </Link>
            <a
              href="tel:+998952405111"
              className="flex gap-3  items-center border-secondary border-[2px] rounded-md text-xl  text-white   px-4 py-2 bg-secondary justify-center"
            >
              {t("home-number")}
              <img className="w-6" src={call} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center text-center justify-center py-[70px] xs:text-2xl xs:pt-32  lg:text-3xl font-medium">
        <h1>{t("little-about")}</h1>
      </div>
      <div className="lg:gap-10 xs:gap-5 grid grid-cols-3 justify-items-center">
        <img
          className=" xs:h-[200px] xs:w-[108px] lg:h-[600px] lg:w-[320px] rounded-lg object-cover "
          src={img1}
          alt=""
        />
        <img
          className=" xs:h-[200px] xs:w-[108px] lg:h-[600px] lg:w-[320px] rounded-lg object-cover  "
          src={img2}
          alt=""
        />
        <img
          className=" xs:h-[200px] xs:w-[108px] lg:h-[600px] lg:w-[320px] rounded-lg object-cover "
          src={img3}
          alt=""
        />
      </div>

      <div className="lg:py-[70px] xs:py-[40px] flex flex-col items-center font-medium lg:text-3xl">
        <img className="xs:w-[155px] lg:w-[380px]" src={logoBig} alt="" />
        <h1>{t("provide")}</h1>
      </div>
      <div className="max-w-screen-xs  flex xs:flex-col lg:flex-row xs:max-screen-xs xs:items-center lg:max-w-7xl  gap-10 xs:justify-between">
        <div className="xs:px-10 xs:gap-20 text-white rounded-lg gap-8 lg:max-w-[400px] lg:max-h-[527px] xs:max-h-[86px] xs:max-w-screen-xs  xs:flex-row lg:flex-col items-center bg-secondary xs:p-5 lg:p-10 lg:pb-10 lg:pt-20 flex">
          <img src={tg} className="lg:w-[140px] xs:w-[48px]" alt="" />
          <div className="flex-col flex lg:gap-6 items-center xs:text-xs lg:text-base xs:gap-2">
            <h1 className="xs:text-xs lg:text-lg font-medium -mx-4">
              {t("tg-title")}
            </h1>
            <p className="text-justify xs:hidden lg:block">{t("tg-desc")}</p>
            <button className="order lg:mt-5 font-medium text-secondary bg-white rounded-lg w-[100%] py-1 px-2">
              {t("order-btn")}
            </button>
          </div>
        </div>
        <div className="lg:hidden xs:flex flex-col items-center gap-4 max-w-screen-xs">
          <div className="flex gap-4 ">
            <div className="text-sm p-5 pt-6 rounded-lg shadow-cards flex flex-col items-center  gap-6 w-[161px] h-[152px] font-semibold text-[12.24px]">
              <img className="w-14 " src={blackPc} alt="" />

              <h1 className="">{t("create-website")}</h1>
            </div>
            <div className="text-sm p-5  rounded-lg shadow-cards flex flex-col items-center gap-3 w-[161px] h-[152px] font-semibold text-[12.24px]">
              <img className="w-[73px] " src={crmicon} alt="" />

              <h1 className="">CRM </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center text-sm p-5 pt-6 rounded-lg shadow-cards flex flex-col items-center gap-6 w-[161px] h-[152px] font-semibold text-[12.24px]">
              <img className="w-14 " src={blackMarket} alt="" />

              <h1 className="">{t("online-market")}</h1>
            </div>
            <div className="text-sm xs:px-4 text-center p-5 pt-6 rounded-lg shadow-cards flex flex-col items-center gap-6 w-[161px] h-[152px] font-semibold text-[12.24px]">
              <img className="w-9" src={blackPhone} alt="" />

              <h1 className="">{t("mobile-app")}</h1>
            </div>
          </div>
        </div>
        <div className="lg:flex xs:hidden flex-col gap-4">
          <div className="flex gap-4 ">
            <div className="services-card p-10 pt-12 rounded-lg shadow-cards  flex flex-col items-center text-xl font-semibold gap-6 lg:w-[264px] lg:h-[250px] xs:w-[161px] xs:h-[152px]">
              <img className="image-1" src={blackPc} alt="" />
              <img className="blue-pc" src={bluePc} alt="" />

              <div className="hoverick-1">
                <img className="dt1pc pb-1.5" src={dt1pc} alt="" />
                <img className="dt2pc pb-1.5" src={dt2pc} alt="" />
                <img className="dt3pc" src={dt3pc} alt="" />
                <img className="dt4pc" src={dt4pc} alt="" />
              </div>
              <h1 className="title-service">{t("create-website")}</h1>
            </div>
            <div className="crm-card p-10 pt-5 rounded-lg shadow-cards  flex flex-col items-center text-xl font-semibold gap-11  lg:w-[264px] lg:h-[250px] xs:w-[161px] xs:h-[152px]">
              <div className="image-crm">
                <img className="chain" src={dtBlackCrm} alt="" />
                <img className="cube1 hov" src={dt2blackCrm} alt="" />
                <img className="cube2 hov" src={dt2blackCrm} alt="" />
                <img className="cube3 hov" src={dt2blackCrm} alt="" />
                <img className="cube4 hov" src={dt2blackCrm} alt="" />
                <img className="cube5 hov" src={dt2blackCrm} alt="" />
                <img className="cube1-blue inv " src={dt2blueCrm} alt="" />
                <img className="cube2-blue inv " src={dt2blueCrm} alt="" />
                <img className="cube3-blue inv " src={dt2blueCrm} alt="" />
                <img className="cube4-blue inv " src={dt2blueCrm} alt="" />
                <img className="cube5-blue inv " src={dt2blueCrm} alt="" />
              </div>

              <h1 className="title-crm">CRM</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="market-card p-10 pt-16 rounded-lg shadow-cards  flex flex-col items-center text-xl font-semibold gap-11 lg:w-[264px] lg:h-[250px] xs:w-[161px] xs:h-[152px]">
              <div className="co flex items-center">
                <img className="image0" src={blackMarket} alt="" />
                <img class="image1" src={blueMarket} alt="" />
                <img class="image2" src={dtMarket} alt="" />
              </div>
              <div className="flex w-64 items-center justify-center title-mobile flex-wrap">
                <h1 className="title-market">{t("online-market")}</h1>
              </div>
            </div>
            <div className="mobile-card p-10 pt-16 rounded-lg shadow-cards flex flex-col items-center text-xl font-semibold gap-10 lg:w-[264px] lg:h-[250px] xs:w-[161px] xs:h-[152px]">
              <img className="phone" src={blackPhone} alt="" />
              <div>
                <div class="cont">
                  <div class="click-area">
                    <img src={dt1phone} alt="" />
                  </div>
                  <div class="hand">
                    <img src={dt2phone} alt="" />
                  </div>
                </div>

                <div className="flex w-64 items-center justify-center title-mobile flex-wrap">
                  <h1 className="">{t("mobile-app")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xs:max-w-screens-xs py-20 gap-10 items-center">
        <h1 className="lg:text-3xl font-semibold xs:py-0 lg:py-10">
          {t("partners")}
        </h1>
        <div className="xs:hidden lg:flex flex-col border-y-2 border-[#0D4C9233] py-4 items-center gap-10">
          <div className="flex items-center gap-44">
            <div className="">
              <div className="rounded-xl border-2 xs:max-w-[150px] lg:max-w-[200px] border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
                <img
                  className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                  src={bahraLogo}
                  alt=""
                />
                <h1>BAHRA CHICKEN MEAT</h1>
              </div>
            </div>
            <div className="">
              <div className="rounded-xl border-2 xs:max-w-[150px] lg:max-w-[200px] border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
                <img
                  className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                  src={itpark}
                  alt=""
                />
                <h1>IT PARK</h1>
              </div>
            </div>
            <div className="">
              <div className="rounded-xl border-2 xs:max-w-[150px] lg:max-w-[200px] border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
                <img
                  className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                  src={astrum}
                  alt=""
                />
                <h1>ASTRUM ACADEMY</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-44">
            <div className="">
              <div className="rounded-xl border-2 xs:max-w-[150px] lg:max-w-[200px] border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
                <img
                  className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                  src={tc}
                  alt=""
                />
                <h1>TURKONA COOKING</h1>
              </div>
            </div>
            <div className="">
              <div className="rounded-xl border-2 xs:max-w-[150px] lg:max-w-[200px] border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
                <img
                  className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                  src={evomed}
                  alt=""
                />
                <h1>EVOMED CLINICS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden xs:flex xs:py-5 xs:pb-10 lg:py-16 border-y-2 items-center justify-center border-lightSecondary">
          <SimpleSlider />
        </div>
      </div>
      <div className=" py-14 rounded-xl lg:max-w-[1000px] xs:max-w-screen-xs border-2 border-secondary flex items-center flex-col gap-8 xs:px-8 lg:px-8 mb-20">
        <h1 className="lg:text-[18px] xs:text-[15px] font-semibold xs:max-w-screen-xs lg:max-w-lg">
          {t("join-team")}
        </h1>
        <div className="flex lg:flex-row xs:flex-col justify-between items-center xs:gap-10 lg:gap-20 xs:max-w-screen-xs lg:max-w-[1000px]">
          <div className="lg:max-w-[477px] xs:max-w-screen-xs font-poppins">
            <div>
              <img
                className="float-left lg:m-3 lg:mb-0 xs:w-10 xs:mx-2 lg:w-20"
                src={logoSmall}
                alt=""
              />
            </div>

            <p className="text-justify xs:text-xs lg:text-lg font-semibold xs:leading-5 ">
              {t("join-msg-1")}
              <span className="text-secondary">Frontend</span> {t("join-msg-2")}
              <span className="text-secondary"> Backend</span> {t("join-msg-3")}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start xs:text-xs lg:text-base lg:max-w-[150%] xs:max-w-screen-xs xs:w-[300px] lg:w-[400px] "
          >
            <label htmlFor="name" className="font-medium mb-1 ps-5">
              {t("form-name")}
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-full border-2 border-secondary px-4 py-2 w-[100%] mb-8"
              placeholder={`${t("form-surname-pl")}...`}
              type="text"
              name="name"
            />
            <label htmlFor="tel" className="font-medium mb-1 ps-5">
              {t("your-phone")}
            </label>
            <input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="+998 77 777 77 77"
              className="rounded-full border-2 border-secondary px-4 py-2 w-[100%] mb-8"
              type="tel"
              name="tel"
            />
            <button
              type="submit"
              className="bg-secondary border-2 rounded-full py-2  px-4 w-[100%] text-white hover:bg-opacity-75   hover:ease-in transition-all"
            >
              {t("send-btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
