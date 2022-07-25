import React, { useState }  from "react";
import subject from '../HOC';

const Ajay = (props) =>{
const [marks, setmarks] = useState(10);

return(
    <>
    <span onMouseOver={() => setmarks(marks + 1)}>Ajay's marks {marks}, {props.subjectvalue}</span>
    </>
)
}

export default subject(Ajay);