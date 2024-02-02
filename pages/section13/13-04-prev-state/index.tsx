import { count } from "console";
import { useState } from "react";

export default function CounterLetDocumentPage() {
  const[count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
  } //useSTate 가 여러번 남발했을 경우, 함수에서 벗어나기 직전의 값만을 화면에 렌더링된다. 함수 작동 중에는 임시저장공간에서 함수가 끝날때까지 기다린다.=> 최종 결과 1


  function onClickCountUpPrev(){
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
  }
  //카운트 기초세팅값에서부터 값을 계속 더한 결과를 렌더링한다. => 최종결과 3 


  /* function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }*/

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUpPrev}>숫자 올리기!</button>
      {/* <button onClick={onClickCountDown}>숫자 내리기!</button>*/}
    </div>
  );
}

//위에서 한줄씩 작성하지 않고 구조를 잡고 안에서부터 채워나가는 방식
