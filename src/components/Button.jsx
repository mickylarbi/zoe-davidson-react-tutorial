import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  return (
    <Button
      variant={props.children === "+1" ? "success" : "danger"}
      style={props.margin}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
