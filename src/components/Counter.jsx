import { Button } from "react-bootstrap";
import React, { useState } from "react";
import CustomButton from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);
  const subtractOne = () => setCount(count - 1);

  return (
    <div style={{ margin: "4rem" }}>
      <Count count={count} />
      {/* <h1 style={{ marginBottom: "2rem" }}>{count}</h1> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <CustomButton margin={{ marginRight: "0.5rem" }} onClick={subtractOne}>
          -1
        </CustomButton>
        <CustomButton margin={{ marginLeft: "0.5rem" }} onClick={addOne}>
          +1
        </CustomButton>
      </div>
    </div>
  );
};

export default Counter;
