import React from 'react'
import LazadaLogo from '../assets/lazada/logo.png';
import LazadaPromo from '../assets/lazada/banner.jpg';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs';

export default function Header() { 
    return (
      <div className="sticky top-0 z-10">
      <div className="container md:mx-auto bg-[#F7F7F7] ">
        <div className="flex pt-1 text-xs space-x-6 justify-end text-gray-600 uppercase ">
            <span>save more on app</span>
            <span>sell on lazada</span>
            <span>customer care</span>
            <span>track my order</span>
            <span>login</span>
            <span>signup</span>
        </div>
      </div>
      <div className="h-1/4 bg-[#FFFFFF]">
        <div className="container sm:mx-auto flex">
          <div className="items-center">
          <img className="scale-50" src={LazadaLogo} alt="Lazada Logo" />
          </div>
          <div className="flex-1 flex items-center"> 
            <input className="p-5 outline-none w-[90%] h-[50px] bg-[#EFF0F5]" type="text" placeholder='Search in Lazada' />
            <button className="bg-orange-500 text-white p-2 h-[50px] w-[8%] place-content-center"><BsSearch/></button>
          </div>
          <div className="flex">
            <button className="text-3xl content-center">
              <HiOutlineShoppingCart/>
            </button>
            <img className="scale-50" src={LazadaPromo} alt="" />
          </div>
        </div>
      </div>    
</div>)
}
