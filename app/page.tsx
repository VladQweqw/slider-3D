"use client"
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { SliderCounter } from './components/sliderCounter'
import { topSales } from './constant/topSales'

export default function Home() {


  return (
    <>
      <div className="fixed inset-0 z-[-40] h-screen bg-img bg-cover bg-center"></div>
      <div className="text-primary">
        <div className="text-center w-full h-[100vh] flex flex-col gap-2 justify-between">
          <Navbar />
          <Container>
            <SliderCounter slidesLength={topSales.length} />
          </Container>

          <Slider />
        </div>
      </div>
    </>

  )
}
