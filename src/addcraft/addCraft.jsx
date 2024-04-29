import React from 'react'

const AddCraft = () => {
  const handelSubmit=(e)=>{
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
    const itemsData={name, email, stock, price, time, rating,subcatagory,ShortDiscription,imageurl,itemname}
    console.log(name, email, stock, price, time, rating);
    fetch(`http://localhost:5000/newCraft`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(itemsData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged===true){
        alert("user created successfully");
      }
      // console.log(data)
    })
      form.reset();
  }
  return (
    <div>
    <form className='mt-2 gap-2' onSubmit={handelSubmit} >
      {/* url and name */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" name="imageurl" placeholder="Image Url" className=" mt-2 input input-bordered input-accent w-full" required/>
          <input type="text" name="itemname" placeholder="Item name" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
    {/* short discription */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" name="subcatagory" placeholder="Subcatagoty" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" name="ShortDiscription" placeholder="Short Discription" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          {/* stock and rating */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" name="stock" placeholder="Stock Status" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" name="rating" placeholder="Give rating" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          {/* customization  and time*/}
          <div className='flex justify-evenly gap-2'>
          <input type="text" name="price" placeholder="price" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="text" name="time" placeholder="Time needed" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
         
          {/* user */}
          <div className='flex justify-evenly gap-2'>
          <input type="text" name="username" placeholder="Enter your name" className=" mt-2 input input-bordered input-accent w-full" required/>
         <input type="email" name="email" placeholder="Enter your Email" className=" mt-2 input input-bordered input-accent w-full" required/>
          </div>
          <button  className=" mt-2 btn btn-primary btn-accent w-full">Accent</button>
          </form>
    </div>
  )
}

export default AddCraft
