import React from "react";
import Slider from "react-slick";
import Mana from "../../assets/profile/Mana.png";
import Manee from "../../assets/profile/Manee.png";
import Chujai from "../../assets/profile/Chujai.png";

const testimonialData = [
  {
    id: 1,
    name: "Mana",
    text: "Delicious! The flavors are simply amazing. Highly recommend trying their signature dishes.",
    img: Mana,
  },
  {
    id: 1,
    name: "Manee",
    text: "I can't get enough of this amazing meal! The combination of ingredients is spot-on, and the presentation is just as impressive as the taste. A must-try for any food lover! 👌🍽️",
    img: Manee,
  },
  {
    id: 1,
    name: "Chujai",
    text: "Sai oua Khao soi is absolutely delicious! The flavors are perfectly balanced, and it's a true delight for the taste buds. Highly recommended! 🌟 ",
    img: Chujai,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">explain about Service</p>
          </div>
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full max-w-[200px] max-h-[200px] block object-cover"
                      />
                      <p className="text-gray-500 text-sm">{text}</p>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
