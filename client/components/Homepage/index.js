import React from 'react'

import Welcome from './Welcome'
import TeaSynopsis from './TeaSynopsis'

const Homepage = () => {

    const data = [{place: 'Darjeeling', image:'https://www.hlimg.com/images/places2see/738X538/Darjeeling.jpg'} ,
    {place: 'Cameron Highlands', image:'http://cdn.shopify.com/s/files/1/1531/9251/products/Tea_Plantation_in_Cameron_HIghlands_ca5542f3-b0f3-4ca0-8290-22ce4d8e3826_grande.jpg'}]
    

    return (
        <div className='teaZone'>
            <Welcome />
            {data.map(item => {
                return <TeaSynopsis key={item.place} place={item.place} image={item.image} />
            })}
        </div>
    )
}

export default Homepage