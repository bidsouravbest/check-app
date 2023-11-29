import React from "react";
import Child from "./Child";

const Parent = () => {
  const parentFunc = (val) => {
    console.log("Reading from parent cmp: ", val);
    alert("Reading from parent cmp: " + val);
  };
  return (
    <div>
      <Child data={parentFunc} />
    </div>
  );
};

export default Parent;
