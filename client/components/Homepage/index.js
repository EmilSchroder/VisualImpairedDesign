import React from 'react'

import Welcome from './Welcome'
import TeaSynopsis from './TeaSynopsis'

class Homepage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            activeTea: 'Darjeeling',
            activeImage: 'https://www.hlimg.com/images/places2see/738X538/Darjeeling.jpg',
            activeAlt: 'A gentle hill in Darjeeling, India covered in well maintained tea bushes'
        }

  
    }

    changeTea(item){

        this.setState({
            activeTea: item.place,
            activeImage: item.image,
            activeAlt: item.alt
        })
    }


    render(){

        const data = [{place: 'Darjeeling', image:'https://www.hlimg.com/images/places2see/738X538/Darjeeling.jpg', alt:'A gentle hill in Darjeeling, India covered in well maintained tea bushes'} ,
        {place: 'Cameron Highlands', image:'http://cdn.shopify.com/s/files/1/1531/9251/products/Tea_Plantation_in_Cameron_HIghlands_ca5542f3-b0f3-4ca0-8290-22ce4d8e3826_grande.jpg', alt: 'A sun is setting amoungst misty hills covered with tea bushes'}]
        

            return (
                <div className='teaZone'>
                    <Welcome />
                    <div>
                        <nav>
                            {data.map(item => {
                                return <button key={item.place} onClick={() => this.changeTea(item)}>{item.place}</button>
                            })}
                        </nav>
                        <div>
                                <TeaSynopsis place={this.state.activeTea} image={this.state.activeImage} alt={this.state.activeAlt} />
                        </div>
                    </div>
                </div>
            )
    }

}

export default Homepage