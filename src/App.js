import React, { useState } from "react";

export const App = () => {
  console.log("App");

  const [count, setCount] = useState(0);

  const onClickCountUp = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  )
};
