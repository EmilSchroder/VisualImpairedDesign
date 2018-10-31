import React from 'react'

const TeaSynopsis = (props) => {
    return(
        <div className='teaSynopsis'>
            <div className='synopsisWords'>
                <h1>{props.place}</h1>
                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."</p>
            </div>
            <img className='teafield' src={props.image} alt={props.alt} />
            
        </div>
    )
}

export default TeaSynopsis