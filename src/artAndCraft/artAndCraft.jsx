import React, { useState } from 'react'
import { IoMdPricetags, IoMdTime } from 'react-icons/io';
import { TbStarsFilled } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom'
import { LiaMoneyBillWaveSolid } from "react-icons/lia";



const ArtAndCraft = () => {
    const newItems=useLoaderData();
    const [loder,setLoder]=useState(true);
    // console.log(newItems)
  return (
    <div className="mx-2 mt-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      {
    loder?"":<div className='flex justify-center text-5xl mt-16'>
    <progress className="progress w-56"></progress>
    </div>
  }
      {newItems.map((item) => {
        return (
         <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" key={item._id}>
      <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
        <figure className="lg:h-96 md:h-72 h-48 p-2">
          <img src={item.imageurl} alt="Photo of property" />
          {/* <img src="https://i.ibb.co/26rrDJs/img-5.jpg" alt="img-5" border="0" /> */}
        </figure>

        <div className="card-body">
          <h2 className="card-title">{item.itemname}</h2>
          <p>{item.ShortDiscription}</p>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* location and segment */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xl">
              <IoMdTime className='text-green-500'></IoMdTime>
              <p>{item.time} days</p>
            </div>
            <div className="flex items-center  text-xl gap-1">
              <TbStarsFilled className='text-green-500'></TbStarsFilled>
              <p>{item.rating}</p>
            </div>
          </div>
          {/* location and segment end */}
          {/* price and status */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl">
              <LiaMoneyBillWaveSolid className='text-green-500'></LiaMoneyBillWaveSolid>
              <p>{item.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IoMdPricetags className='text-green-500'></IoMdPricetags>
              <p>{item.stock}</p>
            </div>
          </div>
          <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
          {/* price and status end */}
          
          <Link
            to={`/craftdetails/${item._id}`}
            className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
          >
            View Ditails
          </Link>
        </div>
      </div>
    </div>
    
        )
      })}
    </div>
  )
}

export default ArtAndCraft
