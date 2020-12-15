import { useCallback, useState } from "react";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);
  const numers = [3, 6, 9];

  const increment = useCallback(
    (num) => {
      setCount((cou) => cou + num);
    },
    [setCount]
  );

  return (
    <>
      <div
        style={{
          height: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {count}
          {numers.map((number) => (
            <Home number={number} increment={increment} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
