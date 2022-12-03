import React from 'react'
import estore from '../assets/lazada/estore.png';
import voucher from '../assets/lazada/voucher.png';
import lazmall from '../assets/lazada/lazmall.png';
import Item from '../assets/lazada/product/headset.webp';
import Mobile from '../assets/lazada/product/mobile.webp';

const categories = ["Mobile", "Men's T-Shirts", "Water Bottles", "Outdoor Lightning"];

export default function Products() {

  return (
    <div className="bg-[#F5F5F5]  h-[100vh]">
      <div className="container md:mx-auto">
          <div className="grid grid-cols-3 pt-2 space-x-20 text-lg">
            <button className="bg-white border border-l-2 rounded-full hover:shadow-md border-none p-2 flex items-center">
              <img className="w-10" src={estore} alt="Load & eStore" />
              Load & eStore</button>
            <button className="bg-white border border-l-2 rounded-full hover:shadow-md border-none p-2 flex items-center">
              <img className="w-10" src={voucher} alt="Load & eStore" />
            LazMall</button>
            <button className="bg-white border border-l-2 rounded-full hover:shadow-md border-none p-2 flex items-center">
              <img className="w-10" src={lazmall} alt="Load & eStore" />
              Vouchers
            </button>
          </div>
      </div>
      <div>
        <div className="container md:mx-auto pt-4">
          <div className="text-2xl">Flash Sale</div>
            <div className="bg-white mt-2">
              <div className="grid grid-cols-8  p-3 border-b-2 items-center">
                  <div className="col-span-1 text-orange-400">On Sale Now</div>
                  <div className="col-span-6 flex space-x-3 items-center">
                      <div className="">
                      Ending in
                      </div>
                      <div className="bg-red-600 text-white p-2">00</div>
                      <div className="bg-red-600 text-white p-2">00</div>
                      <div className="bg-red-600 text-white p-2">10</div>
                  </div>
                  <div className="col-span-1 justify-self-end">
                    <button className="uppercase text-orange-400 p-2 border border-orange-400">shop all products</button>
                  </div>
              </div>
              <div className="flex">
               {
                Array.apply(0, Array(6)).map(() => 
                  <div className="w-[20rem] h-[18rem] truncate mr-1 bg-white hover:shadow-md cursor-pointer">
                    <img className="object-fill" src={Item} alt="Cool" />
                    <div className="h-[11rem] p-[1rem] pr-[3rem]">
                      <p>M66 Air Cooling Portable Hanging Bladeless Outdoor Sports Rechargeable Neck Fan</p>
                      <p className="text-orange-600">₱ 182.00</p>
                    </div>
                </div>    
               )};   
              </div>
            </div>
        </div>

        <div className="container md:mx-auto pt-4">
          <div className="text-2xl">Categories</div>
            <div className="bg-white mt-2">
              <div className="flex flex-wrap">
               {Array.apply(0, Array(16)).map(() => 
                  <div className="w-[12rem] h-[10rem]  bg-white hover:drop-shadow-md cursor-pointer border">
                    <img className="" src={Mobile} alt="Cool" />
                    <div className="h-[11rem] p-[1rem] pr-[3rem]">
                      <p>{ categories[Math.floor(Math.random() * categories.length)]}</p>                    
                    </div>
                </div>    
               )};   
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
