import React, { memo } from "react";

export const Display = () => {
  console.log("render disp");
  return (
    <>
      <h1>Display Something</h1>
    </>
  );
};
export default memo(Display);
