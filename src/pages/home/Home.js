import { memo, useRef } from "react";

const Home = ({ number, increment }) => {
  const ref = useRef(0);

  console.log(ref.current++);

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => increment(number)}>set Count + {number}</button>
      </div>
    </>
  );
};

export default memo(Home);
