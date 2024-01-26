export default function TypeScriptPage() {
  //타입 명시
  let aaa: string = "안녕하세요";
  let vv = "안녕하세요";

  //타입 명시가 필요한 상황
  let ccc = 1000;
  let ddd: number | string = 1000;
  ddd = "1000원";

  //숫자타입
  let eee: number = 10;

  //boolean타입
  let fff: boolean = true;
  fff = false;
  // ERROR! JS의 한계
  //백엔드에서 값을  fff= "false" 처럼 문자열로 변환해서 주는 경우 있음. 그렇담 이 찬 문자열 "false"는 T?F? -> 빈 문자열이 아니니, true로 작동한다.

  //배열 타입
  let ggg: number[] = [1, 2, 3, 4, 5 /*"안녕"*/];
  let hhh: string[] = ["철수", "영희" /*10 */];
  let iii = ["철수", "영희", 10];
  //iii: (string | number)[] 타입 자동추론

  //객체 타입
  const profile = {
    name: "철수",
    age: 8,
    school: "모초등학교",
  };

  profile.name = "훈이";
  //profile.age="8살" 오류 남
  //profile.hobby ="수영"  타입 자동 추론으로 인한 설정 적용

  interface IProfile {
    name1: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  //? : 있어도 되고 없어도 되고.

  const profile1: IProfile = {
    name1: "밍",
    age: 8,
    school: "밍초등학교",
  };

  //함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const result = add(1000, 2000, "원"); //결과애 return 타입도 예측 가능

  //화살표 함수

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  const result2 = add(1000, 2000, "원"); //결과에 return 타입도 예측 가능

  //any타입
  let qqq: any = "철수";
  qqq = 123;
  qqq = true; ///JS와 동일

  //js 영역만 ts로 바뀐다.
  //TS에는 타입 추론이 있다. 처음 들어간 값의 타입으로 타입을 자동 지정한다.
  return <></>;
}
