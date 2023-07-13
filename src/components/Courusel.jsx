import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { astrum, bahraLogo, evomed, itpark, tc } from "../assets/images";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {},
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 2,
            speed: 2000,
            autoplaySpeed: 5000,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel">
        <Slider className="pb-10" {...settings}>
          <div className="">
            <div className="rounded-xl border-2 border-lightSecondary justify-center  flex flex-col items-center p-4 gap-4 lg:text-xs xs:text-[10px] text-secondary font-semibold">
              <img
                className="lg:w-44 lg:h-28 xs:w-32 xs:h-20 object-cover    border-2 rounded-2xl "
                src={evomed}
                alt=""
              />
              <h1>EVOMED CLINICS</h1>
            </div>
          </div>
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
              <h1>IT PARK COMPANY</h1>
            </div>
          </div>
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
                src={astrum}
                alt=""
              />
              <h1>ASTRUM ACADEMY</h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
