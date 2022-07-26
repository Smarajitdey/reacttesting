import React from "react";
import subject from "../HOC";

const Akash = (props) => {
    return(
        <p>My subject is {props.subjectvalue}</p>
    )
}

export default subject(Akash);