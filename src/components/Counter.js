import { useRef } from 'react';
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end, decimals }) => {
  const countUpRef = useRef(null);
  
  return (
    <CountUp
      end={end ? end : 100}
      duration={1}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef}>count</span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;