import React, { useEffect, useState } from "react";
import CardsItems from "./cardsItems";

const Card = () => {
  const [loder, setLoder] = useState(false);

  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://our-pottery-hkuobw35h-abid-hasans-projects-ae907b12.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
        setLoder(true);
        // console.log(data);
      });
  }, []);
  return (
    <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      {loder ? (
        ""
      ) : (
        <div className="flex justify-center text-5xl mt-16">
          <progress className="progress w-56"></progress>
        </div>
      )}
      {craftItems.slice(0,6).map((item) => {
        return <CardsItems craftdata={item} key={item._id}></CardsItems>;
      })}
    </div>
  );
};

export default Card;
