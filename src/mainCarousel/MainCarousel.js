import React from 'react';
import SlickCarousel from '../Components/SlickCarousel';

export const MainCraousel = () => {
    return (
        <div className='h-screen'>
            <SlickCarousel
                autoplay
            >
                <div className='h-[100%]'>
                    <img src={"/freelance-project/mainCarouselImages/mainCarousel1.jpg"}
                        alt="Main Carousel 1"
                        className='max-h-screen min-w-full bg-contain object-cover'

                    />
                </div>
                <div>
                    <img src={"/freelance-project/mainCarouselImages/mainCarousel2.jpg"} alt="Main Carousel 1"
                        className='max-h-screen min-w-full bg-contain object-cover' />
                </div>
                <div>
                    <img src={"/freelance-project/mainCarouselImages/mainCarousel3.jpg"} alt="Main Carousel 1"
                        className='max-h-screen min-w-full bg-contain object-cover' />
                </div>

            </SlickCarousel >
        </div >
    )
}