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
            // console.log(data);
          });
      }, []);

    const potteryItem = carftItem.find((craft) => craft._id == id); //we not chacking type
  if (!potteryItem) {
    return <div>No property found</div>;
  }
console.log(potteryItem);
  const handelsubmit=(e)=>{
    e.preventDefault();
    const name=e.target.username.value;
    const email=e.target.email.value;
    const stock=e.target.stock.value;
    const price=e.target.price.value;
    const time=e.target.time.value;
    const rating=e.target.rating.value;
    const subcatagory=e.target.subcatagory.value;
    const ShortDiscription=e.target.ShortDiscription.value;
    const imageurl=e.target.imageurl.value;
    const itemname=e.target.itemname.value;
    const updateInfo={name, email, stock, price, time, rating,subcatagory,ShortDiscription,imageurl,itemname}
    console.log(name, email, stock, price, time, rating);

    fetch(`http://localhost:5000/newCraft/${potteryItem._id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateInfo)
    })
    .then(res=>res.json)
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            alert("user updated successfully")
          }
    })
    
  }
   
  return (
    // <div className="hero flex justify-center relative -z-10 sm:z-10">
        
    //     <div className="w-full max-w-3xl grid justify-center border-2 rounded-lg bg-base-100 m-10 z-50">
    //       <h1 className="text-center text-2xl font-bold p-6">
    //         Update your Information
    //       </h1>
    //       <form className="card-body"  onSubmit={handelsubmit}>
    //         {/* name and email */}
    //         <div className='flex justify-center w-full gap-3'>
    //         <div>
    //         <span className="label label-text" name="name"> your name</span>
    //         <input type="text" defaultValue={potteryItem.name} className='input input-bordered' />
    //         </div>
    //         <div>
    //         <span className="label label-text"> your Email</span>
    //         <input type="email" defaultValue={potteryItem.email} name="email" className='input input-bordered' />
    //         </div>
    //         </div>
    //          {/* Item name name and Url */}
    //         <div className='flex justify-center w-full gap-3'>
    //         <div>
    //         <span className="label label-text" name="imageurl">Image URL</span>
    //         <input type="text" defaultValue={potteryItem.imageurl} className='input input-bordered' />
    //         </div>
    //         <div>
    //         <span className="label label-text" name="itemname"> Item name</span>
    //         <input type="text" defaultValue={potteryItem.itemname} className='input input-bordered'/>
    //         </div>
    //         </div>
    //         {/* subcatagory and stock */}
    //         <div className='flex justify-center w-full gap-3'>
    //         <div>
    //         <span className="label label-text" name="subcatagory">subcatagory </span>
    //         <input type="text" defaultValue={potteryItem.subcatagory} className='input input-bordered' />
    //         </div>
    //         <div>
    //         <span className="label label-text" name="stocks"> stocks</span>
    //         <input type="text" defaultValue={potteryItem.stock} className='input input-bordered'/>
    //         </div>
    //         </div>
    //         {/* discription */}
    //         <div className='flex justify-center w-full gap-3'>
    //         <div>
    //         <span className="label label-text" name="ShortDiscription">Short Discription </span>
    //         <input type="text" defaultValue={potteryItem.ShortDiscription} className='input input-bordered' />
    //         </div>
    //         <div>
    //         <span className="label label-text" name="price"> price</span>
    //         <input type="text" defaultValue={potteryItem.price} className='input input-bordered'/>
    //         </div>
    //         </div>
    //         {/* id and rating */}
    //         <div className='flex justify-center w-full gap-3'>
    //         <div>
    //         <span className="label label-text" name="_id">Id of Item </span>
    //         <input type="text" defaultValue={potteryItem._id} className='input input-bordered' />
    //         </div>
    //         <div>
    //         <span className="label label-text" name="rating"> rating</span>
    //         <input type="text" defaultValue={potteryItem.rating} className='input input-bordered'/>
    //         </div>
    //         </div>
    //       <button className='btn border-none m-3 bg-sky-400 hover:bg-sky-800 hover:text-white' >Update</button>
    //       </form>
    //       <ToastContainer></ToastContainer>
    //     </div>
          
    //   </div>
    <div>
    <form className='mt-2 gap-2' onSubmit={handelsubmit} >
      {/* url and name */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" defaultValue={potteryItem.imageurl} name="imageurl" placeholder="Image Url" className=" mt-2 input input-bordered input-accent w-full" required/>
          <input type="text" defaultValue={potteryItem.itemname} name="itemname" placeholder="Item name" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
    {/* short discription */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" defaultValue={potteryItem.subcatagory} name="subcatagory" placeholder="Subcatagoty" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" defaultValue={potteryItem.ShortDiscription} name="ShortDiscription" placeholder="Short Discription" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          {/* stock and rating */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" defaultValue={potteryItem.stock} name="stock" placeholder="Stock Status" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" defaultValue={potteryItem.name} name="rating" placeholder="Give rating" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          {/* customization  and time*/}
          <div className='flex justify-evenly gap-2'>
          <input type="text" defaultValue={potteryItem.price} name="price" placeholder="price" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" defaultValue={potteryItem.time} name="time" placeholder="Time needed" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
         
          {/* user */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" defaultValue={potteryItem.name} name="username" placeholder="Enter your name" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="email" defaultValue={potteryItem.email} name="email" placeholder="Enter your Email" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          <button  className=" mt-2 btn btn-primary btn-accent w-full">Accent</button>
          </form>
    </div>
  )
}

export default UpdateInfo
