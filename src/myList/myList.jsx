import React, { useState } from 'react'
import { IoMdPricetags, IoMdTime } from 'react-icons/io';
import { TbStarsFilled } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom'
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import Swal from 'sweetalert2';



const MyList = () => {
    const newItems=useLoaderData();
    const [carfItems,setCraftItems]=useState(newItems)
    console.log(newItems)
    const handeldelete=(_id)=>{
      console.log(_id)
      Swal.fire({
        title: "Are you sure?",
        text: "You to delete  this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/newCraft/${_id}`,{
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
          })
          .then(res=>res.json())
          .then(data=>{
            // console.log(data)
            if(data.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Deleted your Pottery",
                icon: "success"
              });
              const remanning=carfItems.filter(item=>item._id!==_id);
              setCraftItems(remanning);
              
            }
          })      
        }
      });
    }
  return (
    <div className="mx-2 mt-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      {carfItems.map((item) => {
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
            to={`/updateInfo/${item._id}`}
            className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
          >
            update Details
          </Link>
          <button onClick={()=>handeldelete(item._id)} className='btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white'>Delete</button>
        </div>
      </div>
    </div>
    
        )
      })}
    </div>
  )
}

export default MyList
