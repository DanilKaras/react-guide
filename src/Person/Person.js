import React from 'react';
const person = (props) => {
    
    return(
            <div>
                <p>I'm {props.name}. My age is {props.age}</p>
                <h2>{props.children}</h2>
            </div>
    )
     
}

export default person;