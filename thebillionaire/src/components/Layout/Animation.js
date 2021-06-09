import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';

const Anim = (props) => {
  return (
    <div>
      <Fade bottom>
        <h4>{props.text}</h4>
      </Fade>
    </div>
  );
};
export default Anim;
