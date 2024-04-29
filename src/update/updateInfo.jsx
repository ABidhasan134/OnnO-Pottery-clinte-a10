import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';

const UpdateInfo = () => {
    const id = useLoaderData();
    const [carftItem,setCraftItem]=useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/newCraft")
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
   
  return (
    <div className="hero flex justify-center relative -z-10 sm:z-10">
        
        <div className="w-full max-w-3xl grid justify-center border-2 rounded-lg bg-base-100 m-10 z-50">
          <h1 className="text-center text-2xl font-bold p-6">
            Update your Information
          </h1>
          <form className="card-body" >
            {/* name and email */}
            <div className='flex justify-center w-full gap-3'>
            <div>
            <span className="label label-text" name="name"> your name</span>
            <input type="text" defaultValue={potteryItem.name} className='input input-bordered' />
            </div>
            <div>
            <span className="label label-text"> your Email</span>
            <input type="email" defaultValue={potteryItem.email} name="email" className='input input-bordered' />
            </div>
            </div>
             {/* Item name name and Url */}
            <div className='flex justify-center w-full gap-3'>
            <div>
            <span className="label label-text" name="imageurl">Image URL</span>
            <input type="text" defaultValue={potteryItem.imageurl} className='input input-bordered' />
            </div>
            <div>
            <span className="label label-text" name="itemname"> Item name</span>
            <input type="text" defaultValue={potteryItem.itemname} className='input input-bordered'/>
            </div>
            </div>
            {/* subcatagory and stock */}
            <div className='flex justify-center w-full gap-3'>
            <div>
            <span className="label label-text" name="subcatagory">subcatagory </span>
            <input type="text" defaultValue={potteryItem.subcatagory} className='input input-bordered' />
            </div>
            <div>
            <span className="label label-text" name="stock"> stock</span>
            <input type="text" defaultValue={potteryItem.stock} className='input input-bordered'/>
            </div>
            </div>
            {/* discription */}
            <div className='flex justify-center w-full gap-3'>
            <div>
            <span className="label label-text" name="ShortDiscription">Short Discription </span>
            <input type="text" defaultValue={potteryItem.ShortDiscription} className='input input-bordered' />
            </div>
            <div>
            <span className="label label-text" name="price"> price</span>
            <input type="text" defaultValue={potteryItem.price} className='input input-bordered'/>
            </div>
            </div>
            {/* id and rating */}
            <div className='flex justify-center w-full gap-3'>
            <div>
            <span className="label label-text" name="_id">Id of Item </span>
            <input type="text" defaultValue={potteryItem._id} className='input input-bordered' />
            </div>
            <div>
            <span className="label label-text" name="rating"> rating</span>
            <input type="text" defaultValue={potteryItem.rating} className='input input-bordered'/>
            </div>
            </div>
          </form>
          <ToastContainer></ToastContainer>
          <button className='btn border-none m-3 bg-sky-400 hover:bg-sky-800 hover:text-white' >Update</button>
        </div>
          
      </div>
  )
}

export default UpdateInfo
