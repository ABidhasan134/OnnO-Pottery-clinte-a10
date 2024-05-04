import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet";
import { IoMdPricetags, IoMdTime } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";

const CardDetails = () => {
  const id = useLoaderData();
  const [carftItem, setCraftItem] = useState([]);
  // console.log(id);
  // console.log(id);
  useEffect(() => {
    fetch("https://our-pottery.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCraftItem(data);
        console.log(data);
      });
  }, []);

  const potteryItem = carftItem.find((craft) => craft._id == id); //we not chacking type
  if (!potteryItem) {
    return <div>No property found</div>;
  }
  // console.log(landProperty);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>{potteryItem.item_name}</title>
      </Helmet>
      <p className=" text-center animate__animated animate__bounce mt-10">
        <span className="md:text-2xl text-xl font-bold text-center mt-3 ">
          {potteryItem.subcategory_name} is a part of our Life
        </span>
      </p>
      <div class="hero mt-24 bg-base-100 mb-10">
        <div class=" xl:flex xl:justify-evenly grid justify-center gap-20 ">
          <img
            src={potteryItem.image}
            class=" rounded-lg shadow-2xl xl:max-w-3xl w-auto "
          />
          <div>
            <h1 class="md:text-5xl lg:text-start text-center font-bold">
              {potteryItem.item_name}
            </h1>
            <p class="py-6 px-2">{potteryItem.short_description}</p>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />

            {/* reant and status */}
            <h1 className="text-2xl text-sky-500 font-bold my-3">
              Price/time:
            </h1>
            {/* location and segment */}
            <div className="flex md:justify-between justify-evenly">
              <div className="flex items-center md:gap-2 text-xl mx-3">
                <IoMdTime></IoMdTime>
                <p>{potteryItem.processing_time} days</p>
              </div>
              <div className="flex items-center gap-2 text-xl mx-3">
                <TbStarsFilled></TbStarsFilled>
                <p>{potteryItem.rating}</p>
              </div>
            </div>
            {/* price and segment end */}
            <div className="flex md:justify-between justify-evenly items-center">
              <div className="flex items-center gap-2 text-xl mt-5">
                <RiMoneyDollarCircleFill className="text-green-600"></RiMoneyDollarCircleFill>
                <p>{potteryItem.price}</p>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <IoMdPricetags></IoMdPricetags>
                <p>{potteryItem.stock_status}</p>
              </div>
            </div>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
            <div className="flex md:justify-between justify-evenly">
              <div className="flex items-center justify-between gap-2 text-xl mx-3">
                <p>{potteryItem.user_name}</p>
                <p>{potteryItem.user_email}</p>
                <button className="btn bg-green-400 hover:bg-green-700 hover:text-white">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails; // Added semicolon
