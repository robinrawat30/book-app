import React from 'react'

import list from '../../../public/list.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Cards';



const FreeBook = () => {

    const filterData = list.filter((data) => data.category === "Free");

    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <>

            <div className="bg-base-100 max-w-screen-2xl m-auto p-3 mb-4 md:mb-10 space-x-0 md:space-x-5">
                <div className="text-center">

                    <h1 className=" text-2xl text-blue-300 font-extrabold">Free Books</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero error fuga provident similique fugit minima.</p>


                </div>

                <div>
                    <Slider {...settings}>
                   {filterData.map((item) =>(

                    <Cards item={item} key={item.id} />


                   ))}
                    </Slider>
                </div>

            </div>


        </>
    )
}

export default FreeBook
