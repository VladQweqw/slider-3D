"use client"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { topSales } from '../constant/topSales'
import Image from 'next/image'
import {useEffect, useState, useCallback } from "react"

interface ITopSales {
  imgSrc: string
}[]


export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(Math.floor((topSales.length) / 2))

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
       slideTo(currentSlide - 1)
      } else if (e.key === "ArrowRight") {
        slideTo(currentSlide + 1)
      }
      
    },
    [currentSlide]
  );

  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  })
  


  function slideTo(index: number) {

    if(index > topSales.length - 1) {
      index = 0;
    }else if(index < 0) {
      index = topSales.length - 1
    }

    document.querySelectorAll(".image-wrapper").forEach((image: Element) => {
      let width = image.getBoundingClientRect().width;
      (image as HTMLDivElement).style.transform = `translateX(${(topSales.length - index - (topSales.length / 2) + 0.5) * width - width}px)`
      
      document.querySelectorAll(".slider-image").forEach((image: Element) => {
        (image as HTMLImageElement).classList.remove('slide-image-active')
      })

      document.querySelectorAll(".slider-image")[index]?.classList.add('slide-image-active')
    })
    
    setCurrentSlide(index)
    localStorage.setItem('currentIndex', JSON.stringify(index));
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div
      onKeyUp={(e) => {
        console.log('awd');
        
        if(e.key === 'ArrowLeft') {
          console.log('a');
          
          slideTo(currentSlide - 1);
        }else if(e.key === 'ArrowRight') {
          slideTo(currentSlide + 1);
          console.log('b');
          
        }
        
      }}
      className="main-container relative bg-secondary
    flex flex-col gap-4 justify-between
    tablet:py-8 
    laptop:py-16 overflow-hidden"
    >

      <h1 className="font-primary font-bold text-md">Top Sales</h1>

      <div className="slideshow" >
          <div className="slider-wrapper">
            <Images slideTo={slideTo} />
          </div>

          <div className="slider-controls">
            <span onClick={() => {
              slideTo(currentSlide - 1)
            }} className="left caret">
              <PiCaretLeftBold size={18} />
            </span>

            <span onClick={() => {
              slideTo(currentSlide + 1)
            }} className="right caret">
              <PiCaretRightBold size={18} />
            </span>
          </div>
      </div>

    </div>
  )
}


function Images(data: {
  slideTo: Function
}) {

  return(
    <>
       {topSales?.map((image: ITopSales, index: number) => (
            <div onClick={() => {
              data.slideTo(index);
            }} key={index} className={`image-wrapper`}>
              <Image 
              placeholder="blur"
              blurDataURL={image.imgSrc}
              width={'330'} 
              height={'330'}
              src={image.imgSrc} 
              alt='image' 
              className={`slider-image ${index === (Math.floor(topSales.length / 2)) ? 'slide-image-active' : ''}`}
              key={image.imgSrc} />
            </div>
          ))}
    </>
  )
}