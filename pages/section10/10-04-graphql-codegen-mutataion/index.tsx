import { useMutation, gql } from "@apollo/client";
import { IMutation } from "../../../src/commons/types/generated/types";

import { IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";
const 내세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function MutationPage() {
  //기존: const [나의함수] = useMutation(내세팅);

  //const [나의함수] = useMutation<결과타입, 변수타입> (나의그래프큐엘세팅)

  //types.ts 파일을 보면 IMutation에 각각의 쿼리나 뮤테이션에 대한 타입들이 명시되어있다. 여기서 특정 타입 하나만 골라서 쓰면 된다. <pick>

  const [counter, setCounter] = useState<number | string>("");
  //("")할 경우 타입추론으로 string으로 자동지정

  const [나의함수] = useMutation<
    Pick<IMutation /*import 필요*/, "createBoard">,
    IMutationCreateBoardArgs
  >(내세팅);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables = $ !!!
        writer: "miner",
        title: "mini",
        contents: "123",

        //age:12할 경우,  개체 리터럴은 알려진 속성만 지정할 수 있으며 IMutationCreteBoardArgs 형식에 age가 없습니다.
      },
    });
    console.log(result);
    result.data.createBoard.number;
    //TS를 써서 결과타입을 지정하지 않을 경우 JS처럼 행동하는데,result에 무엇이 들었는지 알 수 없기 떄문에,  result.data 까지만 찾을 수 있다.
  };

  //버튼을 누르면 버튼에 바인딩된 위의 함수가 실행. 백틱 사이 명령어 (내세팅)의 요청결과가 나의함수, result에 담긴다.
  return (
    <>
      <button onClick={onClickSubmit}>graphQL-API 요청하기!!</button>
    </>
  );
}

//기존의 방식과 달라진 점: 요청헤더에 요청값을 바로 집어넣는 하드코딩을 한 대신 유저이용버튼에서 값을 전달해서 요청하는 패턴으로 변경
