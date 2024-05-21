import React from "react";

const HorizontalLine = ({ style }) => {
  return <hr style={{ ...defaultStyle, ...style }} />;
};

const defaultStyle = {
  // border: "none",
  borderTop: "10px solid black",
  margin: "20px 0",
};

export default HorizontalLine;
