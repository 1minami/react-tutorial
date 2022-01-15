import React from "react";

export const ColorfulMeaage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMeaage;
