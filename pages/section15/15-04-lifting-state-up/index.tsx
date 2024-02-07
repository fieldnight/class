import { useState } from "react";
import Child1 from "./../../../src/components/units/15-lifting-state-up/Child1";

import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterLetDocPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const onClickCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Child1>
        count={count} setCount = {setCount}
      </Child1>
      <Child2>count={count} </Child2>
    </>
  );
}
