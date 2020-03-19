import React, { useState } from "react";
import axios from "axios";


const Image = props => {
  // axios
  //   .get()
  //   .then(response => {
  //     console.log(response);
  //   })
    console.log(props);
    return (
        <div className="image">
            <img src={props.url} alt={props.title}/>
        </div>
    )
}
export default Image;