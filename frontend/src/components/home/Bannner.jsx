import React from 'react'

import banner from '../../assets/banner-img.jpg'

const Bannner = () => {
    return (
        <>

            <div className='bg-sky-50 '>

                <div className=' max-w-screen-2xl m-auto px-3 space-x-0 md:space-x-5 flex flex-col md:flex-row' >



                    <div className='w-full md:w-1/2 order-2 md:order-1 my-12 md:my-30'>

                        <div className="space-y-16">
                            <h1 className=" text-2xl font-bold">Welcome to {" "} <span className="text-blue-300">Book App</span> </h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis quidem, corporis amet soluta voluptas voluptatum voluptatibus doloremque nam! Obcaecati corrupti accusamus, sed quae est exercitationem quis tempora libero quaerat?
                                Libero qui nemo itaque alias ipsum dicta eius mollitia sint placeat quae fugiat dolore pariatur totam quo sequi commodi quasi consequatur at, est rem. Nobis voluptatibus sed delectus nulla doloribus?</p>

                            <button className="btn btn-neutral btn-wide">Read Book</button>

                        </div>

                    </div>
                    <div className='w-full md:w-1/2  order-1 md:order-2 my-12 md:my-30'>
                        <div className="">

                            <div className="w-full card bg-base-100 shadow-xl">

                                <figure><img src={banner} alt="Shoes" className=" rounded-2xl" /></figure>

                            </div>

                        </div>

                    </div>



                </div>

            </div>






        </>
    )
}

export default Bannner
