import { topSales } from "../constant/topSales"
import { Container } from "./Container"
import { useState } from "react"

interface ISliderCounter {
  slidesLength: number,
  
}

type Params = {
  params: {
    sliderIndex: string
  }
}

export function SliderCounter(data: ISliderCounter) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor((data.slidesLength / 2)))
  let percent = (100 * (currentIndex + 1)) / data.slidesLength;
  
  window.addEventListener('storage', () => {
    let index = JSON.parse(localStorage.getItem('currentIndex')!) ?? Math.floor((data.slidesLength / 2));
    setCurrentIndex(index)
  })
  

  return (
    <Container>
      <h1 className="font-primary text-md font-bold">/{currentIndex + 1}</h1>

      <div>
        <div className="w-full rounded-md bg-secondary border-2 border-solid border-secondary overflow-hidden">
          <div style={{ width: `${percent}%` }} className={` h-[1px] bg-cta transition-all duration-500 ease-in-out`}></div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Work collection</h1>
          <p className='text-gray-400'>{topSales[currentIndex].description}</p>
        </div>
      </div>
    </Container>
  )
}
