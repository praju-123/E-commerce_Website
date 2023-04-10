import React, { useContext } from "react";
import { UserContext } from "./Component1";

export const Component4 = () => {
  const user = useContext(UserContext);
  //   const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>
        Hello there first component4 we rend name in last component {user}
      </h1>
    </div>
  );
};
