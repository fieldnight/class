import React, { useState } from "react";
import { Flex, Rate } from "antd";

//!!warning: CSS가 적용이 안 될 경우,  getting started - 2. Use and modify an antd component의 import ..css 부분을 가져오자 (업데이트로 인해 자동적용이 되나 가끔 안되는 경우 있음 )

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);
  console.log(value);
  /*_____________________1단계____________________ 
  const onChangeStar = (value: number): void => {

    setValue(value); //기존 value가 3에서 내가 선택한 숫자에 따라 변경된다. 
  };
  */

  /*____________________2단계______________________ 

  const onChangeStar = (value) => setValue(value);

  //화살표 함수에서 return 값 이외 비어있을 경우, {}=>() return을 소괄호 혹은 생략 가능. */

  return (
    /* _____________기존 식_____________ 
   <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span>{desc[value - 1]}</span> : null}
    </Flex>*/

    /*_________________1단계 & 2단계_________________ 
   <Rate onChange={onChangeStar} value={value} />

   // 해당 onChange는 html의 고유 event 를 담는 것이 아닌 해당 별점 컴포넌트를 만든 사림의 커스텀 onChange다. 실제로 마우스를 올려보면 "RateProps.onChange?: (value: number) => void" 즉 event가 아닌 value가 들어간다.


    /*__________________3단계___________________ : 2단계 컴포넌트 함수 부분을 그대로 가져옴
    <Rate onChange={(value=> setValue(value))} value={value}/> 
*/

    //______________________4단계__________________ : 바인딩 함수의 인자값이 내부 함수의 인자값과 동일할 때 생략 가능.
    <Rate onChange={setValue} value={value} />
  );
}

//export default App;

//함수형 컴포넌트를 통째로 만들어서 export default 하는 방식을 사용하고 있다. default는 화살표 함수를 사용 못하니 형태를 바꿔주자

//App 위에 마우스를 가져다대면 타입추론되어 나타난다. 굳이 명시해주지 않아도 된다. function App(): JSX.Element

//혹은 FC(functional component) 타입을 써도 된다.
