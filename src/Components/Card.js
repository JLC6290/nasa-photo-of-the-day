import React from "react";


const Card = args => {
    const { cardTitle, cardDesc, ...rest } = args;
    console.log(args);
    return (
        <div>
            <h2>{cardTitle}</h2>
            <p>{cardDesc}</p>
        </div>
    )
}
export default Card;