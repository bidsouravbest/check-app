import React, { useState } from "react";

const Child = (props) => {
  const [ip, setIp] = useState();

  const inputHandler = (e) => {
    setIp(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.data(ip);
  };

  return (
    <div>
      <br />
      <br />
      <label>ENTER NAME: </label>
      <input type="text" onChange={inputHandler} />
      <br />
      <br />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Child;
