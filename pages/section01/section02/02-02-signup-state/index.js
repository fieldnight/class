import { getFieldDef } from "graphql/execution/execute";
import { useAmp } from "next/amp";
import { useState } from "react";

//event Handler with parameter(event), UseState instate doc

//region  useState hooks
//useState는 react 라이브러리에서 제공하는 훅 중 하나로,
//훅이란 함수 컴포넌트에서 상태(state)와 생명주기 기능을 사용할 수 있도록 도와주는 기능이다.
//useState는 함수 컴포넌트 내에서 상태를 생성하고 관리한다.
//이를 통해 컴포넌트가 상태를 가질 수 있으며, 상태의 변경이 일어날 때마다 React는 해당 컴포넌트를 다시 렌더링한다.
//endregion

export default function SignupStatePage() {
  const [email, setEmail] = useState(""); //react 버전 상태 머신?
  const [password, setPassword] = useState("");
  const [error, setError] = useState("에러가 발견되지 않았습니다");

  function onChangePassword(event) {
    //html에서 on으로 시작하는 프로퍼티에 연결되는 함수의 매개변수에는 이벤트가 들어간다.

    console.log(event); // 내가 한 행동
    console.log(event.target); //작동된 태그 (타깃)
    console.log(event.target.value); //작동된 태그에 입력된 값

    setPassword(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value); //useState 상태 변경
  }

  function onClickSignup() {
    //button의 onClick 프로퍼티 와 해당 함수 바인딩
    // (벨로그에 정리: 객체의 프로퍼티에 접근하기 - 프로퍼티란?)
    //백엔드로 보낼 내용 작성
    console.log(email);
    console.log(password);
    // console.log(`사용자 이메일: ${setEmail}`);
    // console.log(`사용자 패스워드: ${password}`);
    //js의 탬플릿 리터럴 (Template Literal), ES6부터 새로 도입된 문자열 표기법. 자동형변환, 줄바꿈이 가능하며, 표현식 삽입 방식 도입 ${} 으로 '+' 연산자 사용 필요 없어짐.

    //1. 검증하기
    if (email.includes("@") === false) {
      setError("이메일 양식이 올바르지 않습니다");
    } else {
      //2. 백엔드 API(함수)로 보내기
      //3.성공알람 띄우기
      setError("");
      alert("회원가입을 축하합니다!");
    }
  }

  return (
    <div>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <div>{error}</div>
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <br></br>
      <button onClick={onClickSignup /*바인딩 필요 */}>회원가입</button>
      {/*JSX 특성에는 비어 있지 않는 '식'만 할당할 수 있습니다.*/}
    </div>
  );
}
