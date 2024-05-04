import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/authprovider";
import { Helmet } from "react-helmet";

const UpdateInfo = () => {
  const id = useLoaderData();
  console.log("id", id);
  const [carftItem, setCraftItem] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    fetch("https://our-pottery.vercel.app/Crafts")
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
  console.log(potteryItem);

  const handelsubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const user_name = e.target.username.value;
    const customization = e.target.custom.value;
    const stock_status = e.target.stock.value;
    const price = e.target.price.value;
    const processing_time = e.target.time.value;
    const rating = e.target.rating.value;
    const subcategory_name = e.target.subcatagory.value;
    const short_description = e.target.ShortDiscription.value;
    const image = e.target.imageurl.value;
    const item_name = e.target.itemname.value;
    const user_email = email;
    const updateInfo = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_name,
      user_email,
    };
    console.log(
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_name,
      user_email
    );

    fetch(`https://our-pottery.vercel.app/crafts/${potteryItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>{potteryItem.item_name} Update</title>
            
            </Helmet>
      <form className="mt-2 gap-2" onSubmit={handelsubmit}>
        {/* url and name */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Image Url</span>
            <input
              type="text"
              defaultValue={potteryItem.image}
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
              defaultValue={potteryItem.item_name}
              name="itemname"
              placeholder="Item name"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>
        {/* short discription  and subcatagory*/}
        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>Select subcatagory</span>
            <select
              name="subcatagory"
              defaultValue={potteryItem.subcategory_name}
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={potteryItem.subcategory_name}>
                {potteryItem.subcategory_name}
              </option>
              <option value="Clay-Made pottery">Clay-made pottery</option>
              <option value="Stoneware">Stoneware</option>
              <option value="Porcelain">Porcelain</option>
              <option value="Terra Cotta">Terra Cotta</option>
              <option value="Ceramics & Architectural">
                Ceramics & Architectural
              </option>
              <option value="Home decor pottery">Home decor pottery</option>
            </select>
          </div>
          <div className="w-[50%]">
            <span>ShortDiscription</span>
            <input
              type="text"
              defaultValue={potteryItem.short_description}
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
            <select
              name="stock"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={potteryItem.stock_status}>
                {potteryItem.stock_status}
              </option>
              <option value="In stock">In Stock</option>
              <option value="Make to order">Make to order</option>
            </select>
          </div>

          <div className="w-[50%]">
            <span>Rating</span>
            <select
              name="rating"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={potteryItem.rating}>{potteryItem.rating}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
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
            <select
              name="time"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={potteryItem.processing_time}>
                {potteryItem.processing_time} day
              </option>
              <option value="1">1 day</option>
              <option value="2">2 day</option>
              <option value="3">3 day</option>
              <option value="4">4 day</option>
              <option value="5">5 day</option>
            </select>
          </div>
        </div>

        {/* user */}

        <div className="flex gap-2 justify-evenly">
          <div className="w-[50%]">
            <span>name</span>
            <input
              type="text"
              defaultValue={user.displayName}
              name="username"
              placeholder="Enter your name"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>Customization</span>
            <select
              name="custom"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={potteryItem.customization}>
                {potteryItem.customization}
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
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
