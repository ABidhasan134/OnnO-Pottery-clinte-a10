import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../context/authprovider";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handelSubmit = (e) => {
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
    const user_email = e.target.user_email.value;
    const itemsData = {
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
    console.log(itemsData);
    fetch(`https://our-pottery.vercel.app/crafts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Pottery created successfully")
        }
        console.log(data);
      });
  };
  return (
    <Fade>
      <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Adding From</title>
            
            </Helmet>
            <ToastContainer></ToastContainer>
        <form className="mt-2 gap-2" onSubmit={handelSubmit}>
          {/* url and name */}
          <div className="flex justify-evenly gap-2">
            <input
              type="text"
              name="imageurl"
              placeholder="Image Url"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
            <input
              type="text"
              name="itemname"
              placeholder="Item name"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          {/* short discription & sub-discription*/}
          <div className="flex justify-evenly gap-2">
            <select
              name="subcatagory"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value="">Select subcatagory</option>
              <option value="Clay-Made pottery">Clay-made pottery</option>
              <option value="Stoneware">Stoneware</option>
              <option value="Porcelain">Porcelain</option>
              <option value="Terra Cotta">Terra Cotta</option>
              <option value="Ceramics & Architectural">
                Ceramics & Architectural
              </option>
              <option value="Home decor pottery">Home decor pottery</option>
            </select>
            {/* <input
              type="text"
              name="subcatagory"
              placeholder="Subcatagoty"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            /> */}
            <input
              type="text"
              name="ShortDiscription"
              placeholder="Short Discription"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          {/* stock and rating */}
          <div className="flex justify-evenly gap-2">
            <select
              name="stock"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value="">Add Stock status</option>
              <option value="In stock">In Stock</option>
              <option value="Make to order">Make to order</option>
            </select>

            <select
              name="rating"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value="">Give product reatting</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* customization  and time*/}
          <div className="flex justify-evenly gap-2">
            <input
              type="text"
              name="price"
              placeholder="price"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />

            <select
              name="time"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value="">Needed Time</option>
              <option value="1">1 day</option>
              <option value="2">2 day</option>
              <option value="3">3 day</option>
              <option value="4">4 day</option>
              <option value="5">5 day</option>
            </select>
            {/* <input
              type="number"
              name="time"
              placeholder="Time needed"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            /> */}
          </div>

          {/* user */}
          <div className="flex justify-evenly gap-2">
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              defaultValue={user?.displayName || "username"}
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
            <select
              name="custom"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value="">Customizable</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            {/* <input
              type="text"
              name="custom"
              placeholder="Yes ro No"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            /> */}
          </div>
          <div className="flex justify-evenly gap-2">
            <input
              type="text"
              name="user_email"
              placeholder="Enter your user_email"
              defaultValue={user?.email || "Emailname"}
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <button className=" mt-2 btn btn-primary btn-accent w-full">
            Add Pottery
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default AddCraft;
