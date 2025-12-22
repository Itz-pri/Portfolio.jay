import { useState, useEffect } from "react";

export default function DinoRuning() {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState()

  let Run1
  let Run2


  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prev => !prev);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (start) {
    Run1 = "dino_run1.svg"
    Run2 = "dino_run2.svg"
  } else {
    
    Run1 = "dino-without-path.svg"
    Run2 = "dino-without-path.svg"
  }

  return (
    <div
      className="absolute -bottom-11 -left-8  h-60 z-50 shrink-0">
      <img

        onMouseDown={() => setStart(true)}
        onMouseUp={() => setStart(false)}

        src={toggle ? `${Run1}` : `${Run2}`}
        alt="dino"
        className=" h-60 select-none shrink-0"
      />
    </div>
  );
}