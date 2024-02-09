//class=> function

import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount와 동일  => 의존성 배열 (dependency array)
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []); //안: 함수 ,끝: 배열 => 배열이 있어서 시작은 되지만 [] 안에 값이 없어서 재실행 X

  //componentDidUpdate + componentDidMount와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  }); //[]이 없어서 무조건 재실행

  //componentWillUmount와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전 실행");
      /*[ex]채팅방 나가기: [x]클릭 => 접속자 상태 변경 api BE에 전송=> 채팅방 나감*/
    };
  });

  //useEffect 하나로 합치기

  useEffect(() => {
    console.log("그려지고 나서 실행");
    return () => {
      console.log("사라지기 전에 실행!!");
    };
  }, []);

  //useEffect에서 배열이 없을 경우 : 변경이 일어나면 무조건 재실행된다. [] => 처음 한번만 실행, 배열 내 값 변경이 있을 경우만 재실행.

  /*useEffect의 잘못된 사용법
  useEffect(() => {
    SetWriter();
  }, [count]);
  //1회차 렌더링: 컴포넌트가 위에서 아래로 실행되며 화면에 그림이 그려진다. (예외)=> 그 후에 useEffect 들이 실행된다. 위치는 위쪽에 있지만 건너뛰고 마지막에 실행. 이 안에서 setState로 값 변경시 추가적인 렌더리잉 1회 더 일어난다. 

  useEffect(() => {
    SetCount((prev)=>prev+1);
  }, [count]);
//위와 같은 원리로 무한루프 무한렌더링에 빠진다.. */

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <div>
      <button onClick={onClickMove}>나가기버튼!!</button>
      <button onClick={onClickCountUp}>카운트버튼!!</button>
    </div>
  );
}
