import React from "react";
import PropTypes from 'prop-types';

const Keycheck = (props) => {
  const userName = props.name;
  return (
    <>
      {props.obj.map(function (item, i) {
        console.log("test");
        return <li key={i}>{item.name}</li>;
      })}
      {userName}
    </>
  );
};

Keycheck.propTypes = {
  name: PropTypes.string,
  obj: PropTypes.array,
}

export default Keycheck;
