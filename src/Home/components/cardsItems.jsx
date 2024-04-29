import React, { useEffect } from "react";
import { IoMdPricetags } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { TbStarsFilled } from "react-icons/tb";
import moneyIcon from "../../../public/img/Animation - 1713035749776.gif";

const CardsItems = ({ craftdata }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(land._id);
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
        <figure className="lg:h-96 md:h-72 h-48 p-2">
          <img src={craftdata.image} alt="Photo of property" />
          {/* <img src="https://i.ibb.co/26rrDJs/img-5.jpg" alt="img-5" border="0" /> */}
        </figure>

        <div className="card-body">
          <h2 className="card-title">{craftdata.item_name}</h2>
          <p>{craftdata.short_description}</p>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* location and segment */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xl">
              <IoMdTime></IoMdTime>
              <p>{craftdata.processing_time} days</p>
            </div>
            <div className="flex items-center  text-xl gap-1">
              <TbStarsFilled></TbStarsFilled>
              <p>{craftdata.rating}</p>
            </div>
          </div>
          {/* location and segment end */}
          {/* price and status */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl">
              <img className="h-[50px]" src={moneyIcon} alt="" />
              {/* <RiMoneyDollarCircleFill></RiMoneyDollarCircleFill> */}
              <p>{craftdata.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IoMdPricetags></IoMdPricetags>
              <p>{craftdata.stock_status}</p>
            </div>
          </div>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* price and status end */}
          
          <Link
            to={`/details/${craftdata._id}`}
            className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsItems;
