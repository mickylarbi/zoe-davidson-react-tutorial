import { Button } from "react-bootstrap";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "4rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>{count}</h1>
      <Button
        variant="danger"
        style={{ marginRight: "0.5rem" }}
        onClick={() => setCount(count - 1)}
      >
        -1
      </Button>
      <Button
        variant="success"
        style={{ marginLeft: "0.5rem" }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
    </div>
  );
};

export default Counter;
