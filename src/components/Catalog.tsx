import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../assets/lazada/banner1.webp';
import Banner2 from '../assets/lazada/banner2.webp';
import Banner3 from '../assets/lazada/banner3.jpg';

const catalogItems = [
  "Electronic Devices",
  "Electronic Accessories",
  "TV & Home Appliances",
  "Health & Beauty",
  "Babies & Toys",
  "Groceries & Pets",
  "Home & Living",
  "Women's Fashion & Accessories",
  "Men's Fashion & Accessories",
  "Kid's Fashion & Accessories",
  "Sports & Lifestyle",
  "Automotive & Motorcycles",
]

const bannerCarousel = [
  {
    alt: 'Picture',
    bannerPath : Banner1
  },
  {
    alt: 'Picture',
    bannerPath : Banner2
  },
  {
    alt: 'Picture',
    bannerPath : Banner3
  }
]
export default function Catalog() {
  return (
    <div>
      <div className="container sm:mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-1 bg-white border-solid border-2 border-gray-300">
            <div className="pt-2">
            {catalogItems.map(item =>      
              <a className="" href="#">        
                <p className="pt-1 pb-2 pl-2 text-xs text-gray-500 hover:bg-gray-200 hover:text-[#F97316]">
                  {item}
                </p>
              </a>
            )}
            </div>  
          </div>
          <div className="col-span-3">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
              {bannerCarousel.map((item) => 
                  <img src={item.bannerPath} alt={item.alt} />
              )}
            
            </Carousel>         
          </div>
        </div>
        
      </div>
    </div>
  )
}
