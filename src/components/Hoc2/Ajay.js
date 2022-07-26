import React from "react";
import locations  from "./HOC2"

const Ajay = (props) => {
    return(
        <p>My location is {props.locationName}</p>
    )
}

export default locations(Ajay);