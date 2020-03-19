import React from "react";


const Image = args => {
    const { imageData, ...rest } = args;
    console.log(args);
    return (
        <div className="image">
            <img src={imageData} alt="APOD from NASA"/>
        </div>
    )
}
export default Image;