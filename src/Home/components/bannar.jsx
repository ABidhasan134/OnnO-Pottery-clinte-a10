import React, { useEffect, useState } from "react";


const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Check if typing is complete
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust the speed of typing by changing the interval

      // Clear interval when typing is complete
      return () => clearInterval(interval);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};
export default function Bannar() {

  return (
       
      <div className="carousel w-full lg:mb-5 relative sm:-top-4 -top-3 md:top-1 lg:top-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row justify-evenly">
              <img
                src="https://cdn.shopify.com/s/files/1/0553/3148/7793/files/MKM_2148.jpg?v=1690867911"
                className="sm:h-[600px] h-[200px] rounded-lg lg:w-1/2"
              />
              <div>
                <h1 className="text-5xl font-bold"><Typewriter text="Handcrafted Stoneware Mug" /></h1>
                
                <p className="py-6">
                Welcome to our exclusive Pottery craft company! We specialize in <br />
                creating exquisite handmade pottery pieces that add elegance and charm to any space. <br />
                From timeless clay-made pottery to stylish stoneware, delicate porcelain, rustic terra cotta,<br />
                 captivating ceramics & architectural designs, and enchanting home decor pottery, our collection showcases the finest craftsmanship and artistic expression.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row justify-evenly">
              <img
                src="https://cdn.shopify.com/s/files/1/1186/0576/files/Pics-for-CeramicTemplate-01.jpg?v=1486719916"
                className="sm:h-[600px] h-[200px] rounded-lg"
              />
              <div >
                <h1 className="text-5xl font-bold"><Typewriter text="Stoneware" /></h1>
                <p className="py-6">
                Welcome to our exclusive Pottery craft company! We specialize in <br />
                creating exquisite handmade pottery pieces that add elegance and charm to any space. <br />
                From timeless clay-made pottery to stylish stoneware, delicate porcelain, rustic terra cotta,<br />
                 captivating ceramics & architectural designs, and enchanting home decor pottery, our collection showcases the finest craftsmanship and artistic expression.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://www.unstudio.com/image/2017/11/9/s_un_studio_projects20122012_baku_2materialphotosfacade_ceramic_prototypeimg_438.jpg%28mediaclass-masthead-image.4e1a49d738a19641358911833dfb355bf10d147f%29.jpg"
                className="h-auto sm:h-[600px] rounded-lg "
              />
              <div >
                <h1 className="text-5xl font-bold"><Typewriter text="Ceramic Wall Tiles" /></h1>
                <p className="py-6">
                Welcome to our exclusive Pottery craft company! We specialize in <br />
                creating exquisite handmade pottery pieces that add elegance and charm to any space. <br />
                From timeless clay-made pottery to stylish stoneware, delicate porcelain, rustic terra cotta,<br />
                 captivating ceramics & architectural designs, and enchanting home decor pottery, our collection showcases the finest craftsmanship and artistic expression.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://missplant.com/cdn/shop/products/large_1602879251_3fb1a833-b1de-4238-b4db-d3cbe98dda9f_1000x1000.jpg?v=1636639613"
                className="h-auto rounded-lg"
              />
              <div >
                <h1 className="text-5xl font-bold"><Typewriter text="Handmade Terra Cotta Planter" /></h1>                
                <p className="py-6">
                Welcome to our exclusive Pottery craft company! We specialize in <br />
                creating exquisite handmade pottery pieces that add elegance and charm to any space. <br />
                From timeless clay-made pottery to stylish stoneware, delicate porcelain, rustic terra cotta,<br />
                 captivating ceramics & architectural designs, and enchanting home decor pottery, our collection showcases the finest craftsmanship and artistic expression.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

  );}
