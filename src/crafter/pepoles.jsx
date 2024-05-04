import React, { useEffect, useState } from "react";
import ShowWriters from "./showWriters";

const Pepoles = () => {
  const [writerInfo, setWriterInfo] = useState([]);
  const [loder, setLoder] = useState(false);
  useEffect(() => {
    fetch("https://our-pottery-hkuobw35h-abid-hasans-projects-ae907b12.vercel.app/artices")
      .then((res) => res.json()) // <-- Added () after res.json
      .then((data) => {
        setWriterInfo(data);
        setLoder(true);
      })
      .catch((error) => console.error("Error fetching writer", error));
  }, []);
  console.log(writerInfo);
  return (
    <div className="container">
      <div className="flex justify-center mb-4 text-sky-500 bg-sky-50 py-4 rounded-md">
        <h1 className="font-bold text-3xl">Our Artice</h1>
      </div>
      {loder ? (
        ""
      ) : (
        <div className="flex justify-center text-5xl mt-16">
          <progress className="progress w-56"></progress>
        </div>
      )}
      <div>
        {writerInfo.map((element) => {
          return <ShowWriters person={element}></ShowWriters>;
        })}
      </div>
    </div>
  );
};

export default Pepoles;
