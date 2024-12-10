import { motion } from "motion/react";
import { useEffect, useRef, forwardRef } from "react";

const Bar = forwardRef(({ val, index }, ref) => {
  return (
    <motion.div
      ref={ref}
      key={index}
      className="bar"
      style={{ height: `${val}em` }}
      layout
    ></motion.div>
  );
});
export default Bar;
