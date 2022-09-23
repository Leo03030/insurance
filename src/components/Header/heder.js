import React from "react";
import homepage from "../Img/homepage.jpg";

const Logo = (props) => {
  return (
      <img style={props.style} width={props.width} height={props.height} src={homepage} alt="homepage" />
  );
};

export default Logo;
