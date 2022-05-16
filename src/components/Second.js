import React from 'react'

export default function Second(props) {
    console.log(props);
    return (
        <div>
          I am Second !  
          <p>{props.location.state.name}</p>
        </div>
    )
}


