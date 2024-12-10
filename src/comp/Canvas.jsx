import Bar from "./Bar";
import { useState, useEffect, useRef } from "react";
import { useAnimation, animate } from "motion/react";
import { randomArray, xFromTranslate } from "../utils/utils";
import bubbleSort from "../algos/bubbleSort";

const Canvas = () => {
  const n = 5;
  const [vals, setVals] = useState([]);
  const [steps, setSteps] = useState([]);
  const barRefs = [];
  for (let i = 0; i < n; i++) {
    barRefs[i] = useRef(null);
  }
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const arr = randomArray(5, 20, n);
    setVals(arr);
  }, []);

  const initHandler = () => {
    const arr = randomArray(5, 20, n);
    setVals(arr);
    setRenderKey((prev) => prev + 1);
  };

  const playHandler = async () => {
    const logs = bubbleSort([...vals]);
    setSteps(logs);
  };

  const stepHandler = async () => {
    for (let step of steps) {
      let ctrl = animate(barRefs[step[0]].current, {
        y: "-2em",
        backgroundColor: "purple",
      });
      ctrl = animate(barRefs[step[1]].current, {
        y: "-2em",
        backgroundColor: "purple",
      });
      await ctrl;
      ctrl = animate(barRefs[step[0]].current, {
        y: 0,
        backgroundColor: "pink",
      });
      ctrl = animate(barRefs[step[1]].current, {
        y: 0,
        backgroundColor: "pink",
      });
      await ctrl;
      if (step[2]) {
        let b1 = barRefs[step[0]].current;
        let b2 = barRefs[step[1]].current;
        let x1 = xFromTranslate(b1.style.transform);
        let x2 = xFromTranslate(b2.style.transform);
        animate(b1, {
          x: `${x1 + 2}em`,
          backgroundColor: "green",
        });
        await animate(b2, {
          x: `${x2 - 2}em`,
          backgroundColor: "green",
        });
        let temp = barRefs[step[0]];
        barRefs[step[0]] = barRefs[step[1]];
        barRefs[step[1]] = temp;
      }
    }
  };

  return (
    <div className="canvas">
      <div className="wrapper" key={renderKey}>
        {vals.map((v, i) => (
          <Bar ref={barRefs[i]} val={v} index={i} key={i} />
        ))}
      </div>
      <div className="controls">
        <button onClick={initHandler}>init</button>
        <button onClick={playHandler}>play</button>
        <button onClick={stepHandler}>step</button>
      </div>
    </div>
  );
};

export default Canvas;
