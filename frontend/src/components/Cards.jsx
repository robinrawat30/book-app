import React from 'react'






const Cards = ({item}) => {

    // console.log(item);
  
    
    return (
        <>
            <div>

                <div className="card w-full md:w-96  bg-base-100 shadow-xl hover:scale-105 duration-100">
                    <figure className="px-10 pt-10">
                        <img src={item.image} alt="image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-wide">Read Now</button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Cards
