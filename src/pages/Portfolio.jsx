import bahraLogo from "../assets/images/IMG_0127 1.png";
import logoEvomed from "../assets/images/logoEvomed-removebg-preview.png";
import { tc } from "../assets/images/index";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="xs:flex justify-center items-center flex-row my-12 ">
      <section>
        <div className="flex text-center justify-center items-center">
          <h1 className="lg:text-3xl lg:py-8 xs:mb-4 xs:text-xl font-semibold">
            {t("navbar-2")}
          </h1>
        </div>

        <div className="xs:flex lg:hidden flex-col gap-4">
          <div className="justify-between xs:max-w-screen-xs lg:hidden  items-center border-2 border-[#EFABF4]  gap-10 p-2 text-[12.35px] font-poppins h-[85.75px] w-[343px]  flex items text-black rounded-xl">
            <img className="w-40 object-cover h-20" src={logoEvomed} alt="" />

            <div className="flex flex-col gap-1 pr-7">
              <h2 className="font-semibold">Evomed</h2>
              <a href="https://evomed.uz/" className="text-[5px] text-gray-500 ">{t("service-5")}</a>
            </div>
          </div>

          <div className="px-10 xs:max-w-screen-xs lg:hidden justify-between  items-center border-2 border-[#F9E01A]  gap-10 p-2 text-[12.35px] font-poppins h-[85.75px] w-[343px]  flex items text-black rounded-xl">
            <img className="w-14" src={bahraLogo} alt="" />

            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">BAHRA</h2>
              <h6 className="text-[5px] text-gray-500">{t("service-1")}</h6>
            </div>
          </div>

          <div className="px-10 xs:max-w-screen-xs lg:hidden justify-between  items-center border-2 border-[#009eaf]     gap-10 p-2 text-[12.35px] font-poppins h-[85.75px] w-[343px]  flex items text-black rounded-xl">
            <img className="w-14 h-9 object-cover " src={tc} alt="" />

            <div className="flex flex-col gap-1 ">
              <h2 className="font-semibold">TURKONA COOKING</h2>
              <h6 className="text-[5px] text-gray-500 self-center ps-14">
                {t("service-1")}
              </h6>
            </div>
          </div>
        </div>
        <div className="xs:hidden lg:grid grid-cols-2 place-items-center gap-32 gap-y-10">
          <div className="bg-[#FCDC33] p-4 px-7 rounded-2xl">
            <div className="p-16">
              <img className="w-44 object-cover" src={bahraLogo} alt="" />
            </div>
            <div className="flex gap-2 items-center ms-36   justify-center hover:cursor-pointer hover:bg-white rounded-md w-40   ">
              <a href="https://www.methodcloud.online/" className="font-semibold">Saytga o'tish</a>
              <i class="fa fa-link" aria-hidden="true"></i>
            </div>
          </div>
          <div className="bg-[#fd84f9] p-4 rounded-2xl px-7">
            <div className="p-4">
              <img className="w-64   object-cover" src={logoEvomed} alt="" />
            </div>
            <div className="flex gap-2 items-center ms-36   justify-center hover:cursor-pointer hover:bg-white rounded-md w-40   ">
              <a href="https://evomed.uz/" className="font-semibold">Saytga o'tish</a>
              <i class="fa fa-link" aria-hidden="true"></i>
            </div>
          </div>
          <div className="bg-[#009eaf] p-4 rounded-2xl px-7">
            <div className="justify-center flex items-center py-4 ">
              <img className="w-64 h-[150px] object-cover" src={tc} alt="" />
            </div>
            <div className="flex gap-2 items-center ms-36   justify-center hover:cursor-pointer hover:bg-white rounded-md w-40   ">
              <a href="https://turkonacooking.uz" className="font-semibold">Saytga o'tish</a>
              <i class="fa fa-link" aria-hidden="true"></i>
            </div>
          </div>
          <div className="bg-[#FCDC33] p-4 rounded-2xl px-7">
            <div className="p-16">
              <img className="w-44 object-cover" src={bahraLogo} alt="" />
            </div>
            <div className="flex gap-2 items-center ms-36   justify-center hover:cursor-pointer hover:bg-white rounded-md w-40   ">
              <h1 className="font-semibold">Saytga o'tish</h1>
              <i class="fa fa-link" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
