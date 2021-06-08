// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import Slide from 'react-reveal/Slide';

// const Animation = (props) => {
//     const [flip, set] = useState(false)
//     const propss = useSpring({
//       to: { opacity: 1 },
//       from: { opacity: 0 },
//       reset: true,
//       reverse: flip,
//       delay: 500,
//     //   config: config.molasses,
//       onRest: () => set(!flip),
//     })

//     return(
//         <animated.h1 style={propss}>{props.text}</animated.h1>
//     );
// }

// class Animation extends React.Component {
//   render() {
//     return (
//       <div>
//         <Slide top>
//           <h1>{props.text}</h1>
//         </Slide>
//       </div>
//     );
//   }
// }

// // export default SlideExample;

// export default Animation