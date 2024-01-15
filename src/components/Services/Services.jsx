import React from "react";
import Img1 from "../../assets/khosoi/khaosoi1.png";
import Img2 from "../../assets/khosoi/khaosoi2.png";
import Img3 from "../../assets/khosoi/khaosoi3.png";
const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Pork Khao soi",
    description: "explain about Pork Khao soi",
  },
  {
    id: 2,
    img: Img2,
    name: "Sai oua Khao soi",
    description: "Sai oua is  Northern Thai Sausage",
  },
  {
    id: 3,
    img: Img3,
    name: "Chicken khao soi ",
    description: "explain about Chicken khao soi ",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Our Menu
            </p>
            <h1 className="text-3xl font-bold">northern Thai dishes</h1>
            <p className="text-xs text-gray-400">explain about Service</p>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  key={id}
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[100px] mb-8">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
