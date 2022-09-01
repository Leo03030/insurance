import React from "react";
import videoBg from "../video/VideoBg.mp4";

const Video = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
};
export default Video;
