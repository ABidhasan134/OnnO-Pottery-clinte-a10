import React, { useContext, useEffect, useState } from "react";
import { IoMdPricetags, IoMdTime } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { TbStarsFilled } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authprovider";
import { Helmet } from "react-helmet";

const MyList = () => {
  const newItems = useLoaderData();
  // console.log(newItems.email);
  const [carfItems, setCraftItems] = useState(newItems);
  const [mydata, setMydata] = useState([]);
  // console.log(carfItems)
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  useEffect(() => {
    const filteredItems = carfItems.filter(
      (item) => item.user_email === user.email
    );
    setMydata(filteredItems);
  }, [carfItems, user.email]);
  console.log(mydata);

  const handeldelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You to delete  this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://our-pottery.vercel.app/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted your Pottery",
                icon: "success",
              });
              const remanning = carfItems.filter((item) => item._id !== _id);
              setCraftItems(remanning);
            }
          });
      }
    });
  };
  const handelShort = (etype) => {
    if (etype === "Yes") {
      const sortedItems = mydata
        .slice()
        .sort((a, b) => b.customization.length - a.customization.length);
      setMydata(sortedItems);
    } else if (etype === "No") {
      const sortedItems = mydata
        .slice()
        .sort((a, b) => a.customization.length - b.customization.length);
      setMydata(sortedItems);
    }
  };

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>My List</title>
            
            </Helmet>
      <details className="dropdown">
        <summary className="m-1 btn bg-green-500 hover:bg-green-600">
          sort by<IoChevronDown></IoChevronDown>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handelShort("Yes")}>YES</a>
          </li>
          <li>
            <a onClick={() => handelShort("No")}>NO</a>
          </li>
        </ul>
      </details>

      <div className="mx-2 mt-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
        {/* card showing */}
        {mydata.map((item) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              key={item._id}
            >
              <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
                <figure className="lg:h-96 md:h-72 h-48 p-2">
                  <img src={item.image} alt="Photo of property" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{item.item_name}</h2>
                  <p>{item.short_description}</p>
                  <p>Costomization: {item.customization}</p>
                  <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
                  {/* location and segment */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-xl">
                      <IoMdTime className="text-green-500"></IoMdTime>
                      <p>{item.processing_time} days</p>
                    </div>
                    <div className="flex items-center  text-xl gap-1">
                      <TbStarsFilled className="text-green-500"></TbStarsFilled>
                      <p>{item.rating}</p>
                    </div>
                  </div>
                  {/* location and segment end */}
                  {/* price and status */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl">
                      <LiaMoneyBillWaveSolid className="text-green-500"></LiaMoneyBillWaveSolid>
                      <p>{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                      <IoMdPricetags className="text-green-500"></IoMdPricetags>
                      <p>{item.stock_status}</p>
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
                  <button
                    onClick={() => handeldelete(item._id)}
                    className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            // <div>{item.image}</div>
          );
        })}
      </div>
    </div>
  );
};

export default MyList;
