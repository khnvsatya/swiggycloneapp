import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const timer = setInterval(() => {}, [1000]);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3>About Page</h3>
    </div>
  );
};

export default About;
