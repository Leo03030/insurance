import React from "react";

import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, [time]);

    return () => {
      clearTimeout(myTimer);
    };
  }, [time]);
  return <div className="home-time">{time}</div>;
};

export default Time;
