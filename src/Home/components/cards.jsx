import React, { useEffect, useState } from "react";
import CardsItems from "./cardsItems";

const Card = () => {
  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
      {craftItems.map((item) => {
        return <CardsItems craftdata={item} key={item._id}></CardsItems>;
      })}
    </div>
  );
};

export default Card;
