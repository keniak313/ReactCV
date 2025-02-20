import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
   const key = setInterval(() => {
      setCounter(count => count + 1);
    }, 1000);
    return () => clearInterval(key);
  }, []);

  return <div>{counter} Seconds...</div>;
}
