import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/authprovider";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoMdPricetags } from "react-icons/io";
import { MdHolidayVillage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {Helmet} from "react-helmet";

const CardDetails = () => {
  const { cardInfo } = useContext(AuthContext);
  const id = useLoaderData();
  // console.log(id);
  const landProperty = cardInfo.find((land) => land.id == id); //we not chacking type
  if (!landProperty) {
    return <div>No property found</div>;
  }
  // console.log(landProperty);
  return (
    <div className="container mx-auto">
      <Helmet>
            <title>{landProperty.estate_title}</title>
        </Helmet>
      <p className=" text-center animate__animated animate__bounce mt-10">
         <span className="md:text-2xl text-xl font-bold text-center mt-3 ">{landProperty.segment_name} is about {landProperty.area}</span> 
      </p>
      
      <div class="hero mt-24 bg-base-100 mb-10">
        <div class=" xl:flex xl:justify-evenly grid justify-center gap-20 ">
        <img
            src={landProperty.image}
            class=" rounded-lg shadow-2xl xl:max-w-3xl w-auto "
          />
          <div>
            <h1 class="md:text-5xl lg:text-start text-center font-bold">{landProperty.estate_title}</h1>
            <p class="py-6 px-2">{landProperty.description}</p>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
            <h1 className="text-2xl text-sky-500 font-bold my-3">Know more:</h1>
            <p class="lg:py-6 py-3 px-2">{landProperty.log_description}</p>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
            <h1 className="text-2xl text-sky-500 font-bold my-3">Facilities:</h1>
            <div className="flex md:gap-2 gap-1 justify-evenly">
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{landProperty.facilities[0]}</p>
              <p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{landProperty.facilities[1]}</p>
              {landProperty.facilities[2]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{landProperty.facilities[2]}</p>:""}
              {landProperty.facilities[3]?<p className="animate__animated animate__bounce sm:shadow-md shadow-sm sm:p-4 p-1 bg-sky-50 rounded-3xl text-sky-600">{landProperty.facilities[3]}</p>:""}
             
            </div>
            {/* reant and status */}
            <h1 className="text-2xl text-sky-500 font-bold my-3">Price/Location:</h1>
            {/* location and segment */}
        <div className="flex md:justify-between justify-evenly">
          <div className="flex items-center md:gap-2 text-xl mx-3">
            <MdHolidayVillage className="text-green-600"></MdHolidayVillage>
            <p>{landProperty.segment_name}</p>
            </div>
            <div className="flex items-center gap-2 text-xl mx-3">
              <IoLocationOutline className="text-green-600"></IoLocationOutline>
            <p>{landProperty.location}</p>
            </div>
        </div>
        {/* location and segment end */}
            <div className="flex md:justify-between justify-evenly items-center">
          <div className="flex items-center gap-2 text-xl mt-5">
            <RiMoneyDollarCircleFill className="text-green-600"></RiMoneyDollarCircleFill>
            <p>{landProperty.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IoMdPricetags className="text-green-600"></IoMdPricetags>
            <p>{landProperty.status}</p>
            </div>
        </div>
            <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardDetails; // Added semicolon
