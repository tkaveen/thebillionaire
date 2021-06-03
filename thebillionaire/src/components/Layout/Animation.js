import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const Animation = (props) => {
    const [flip, set] = useState(false)
    const propss = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 500,
    //   config: config.molasses,
      onRest: () => set(!flip),
    })

    return(
        <animated.h1 style={propss}>{props.text}</animated.h1>
    );
}

export default Animation