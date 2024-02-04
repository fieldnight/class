/*children props 실습 with src/components/units/14-props-children-ex*/

import Example from "../../../src/components/units/14-props-children-ex";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <Example schoolProps="용호초등학교">
      {/*쏙 들어가기! 땡겨오기!*/}
      <div>
        <input type="text" />
        <div>저는 철수입니다</div>
        <button>클릭해주세요!</button>
      </div>
    </Example>
  );
}
