import React from 'react'

import list from '../../../public/list.json'
import Cards from '../Cards'

const Courses = () => {
  return (
    <>

    <div className='max-w-screen-2xl m-auto px-3 pb-10 space-x-0 md:space-x-5 '>

      <div className=" grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item) => (
                <Cards item={item} key={item.id}/>
            ))
        }
      </div>

    </div>



    </>
  )
}

export default Courses
