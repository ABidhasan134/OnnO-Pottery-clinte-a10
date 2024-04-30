import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateInfo = () => {
  const id = useLoaderData();
  const [carftItem, setCraftItem] = useState([]);
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
 
  const handelsubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const stock = e.target.stock.value;
    const price = e.target.price.value;
    const time = e.target.time.value;
    const rating = e.target.rating.value;
    const subcatagory = e.target.subcatagory.value;
    const ShortDiscription = e.target.ShortDiscription.value;
    const imageurl = e.target.imageurl.value;
    const itemname = e.target.itemname.value;
    const updateInfo = {
      name,
      email,
      stock,
      price,
      time,
      rating,
      subcatagory,
      ShortDiscription,
      imageurl,
      itemname,
    };
    console.log(name, email, stock, price, time, rating);

    fetch(`http://localhost:5000/newCraft/${potteryItem._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div>
      <form className="mt-2 gap-2" onSubmit={handelsubmit}>
        {/* url and name */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Image Url</span>
            <input
              type="text"
              defaultValue={potteryItem.imageurl}
              name="imageurl"
              placeholder="Image Url"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>Item Name</span>
            <input
              type="text"
              defaultValue={potteryItem.itemname}
              name="itemname"
              placeholder="Item name"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>
        {/* short discription */}
        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>subcatagory</span>
            <input
              type="text"
              defaultValue={potteryItem.subcatagory}
              name="subcatagory"
              placeholder="Subcatagoty"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>ShortDiscription</span>
            <input
              type="text"
              defaultValue={potteryItem.ShortDiscription}
              name="ShortDiscription"
              placeholder="Short Discription"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>
        {/* stock and rating */}
        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>stock</span>
            <input
              type="text"
              defaultValue={potteryItem.stock}
              name="stock"
              placeholder="Stock Status"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>User Name</span>
            <input
              type="text"
              defaultValue={potteryItem.name}
              name="rating"
              placeholder="Give rating"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>
        {/* customization  and time*/}

        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>price</span>
            <input
              type="text"
              defaultValue={potteryItem.price}
              name="price"
              placeholder="price"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>Time</span>
            <input
              type="text"
              defaultValue={potteryItem.time}
              name="time"
              placeholder="Time needed"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>

        {/* user */}

        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>name</span>
            <input
              type="text"
              defaultValue={potteryItem.name}
              name="username"
              placeholder="Enter your name"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>email</span>
            <input
              type="email"
              defaultValue={potteryItem.email}
              name="email"
              placeholder="Enter your Email"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>

        <div>
          <button className=" mt-2 btn btn-primary btn-accent w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateInfo;
