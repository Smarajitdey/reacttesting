import React from "react";
import Keycheck from './keycheck';

let obj = [
    {name: "Smarajit", Location: "Krishnanagar", id: 1},
    {name: "Rajesh", Location: "Krishnanagar", id: 1}
]
const Keyparent = () => {
  const userName = "Rajesh";
  return (
    <>
    <Keycheck 
    obj={obj}
    userName={userName}
     />
    </>
  );
};

export default Keyparent;
