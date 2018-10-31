import React from 'react'

const TeaSynopsis = (props) => {
    return(
        <div>
            <h1>{props.place}</h1>
            <img src={props.image} />
            <p>blah blu</p>
        </div>
    )
}

export default TeaSynopsis