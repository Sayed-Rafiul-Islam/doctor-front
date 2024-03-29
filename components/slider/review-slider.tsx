"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Star } from "lucide-react"

import './review-slider.css'

interface Item {
  imageUrl : string,
    name : string,
    rating : number,
    review : string
}

interface ReviewCarouselProps {
    reviews : Item[]
}

export const ReviewCarousel : React.FC<ReviewCarouselProps> = ({
    reviews
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="slider mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {
          reviews.map(({imageUrl,name,rating,review}, index) => 
          <CarouselItem key={index}>
            <div className="py-1">
              <Card className="bg-transparent w-full border-none">     
                        
                <CardContent className="flex items-center flex-col w-full h-full mx-auto overflow-hidden py-8 relative card">
                  <div className="relative img-container overflow-hidden" >
                    <Image className="img" fill src={imageUrl} alt="human" />
                    <div className="black-overlay">
                      <div className="black">
                        <div className="flex lg:flex-row md:flex-row flex-col">
                        <h1 className="lg:text-3xl md:text-3xl text-xl font-bold text-primary mr-2">{name}</h1>
                            <div className="flex">
                            {
                              Array.from({ length: rating }).map((_,index) => <Star key={index} className="border-none" fill='#f59e0b' />
                                
                          )}
                            </div>
                        </div>
                        <p className="text-xs w-5/6 text-slate-300"><i>{review}</i></p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="lg:flex md:flex items-center rating hidden">
                      <h3 className="font-bold text-xl mr-2">Rating : </h3>
                      {
                        Array.from({ length: rating }).map((_,index) => <Star key={index} className="border-none" fill='#f59e0b' />
                          
                     )}
                    </div>  
                  </div>

                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
