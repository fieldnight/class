//refactor: 04-04 => 16-03-01,spread와 객체 마지막 키 특성을 이용한 리팩토링. 다시 한번 보기

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의큐엘 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function graphQLInputPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의큐엘);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
        /*writer: inputs.writer,
      title: inputs.title,
      contents: inputs.contents,*/
      },
    });

    console.log(result);
  };

  const onChange = (event) => {
    setInputs(
      /*(prev)=>(와 spread 연산자 동일 : 16-03  18분 참조*/ {
        ...inputs,
        [event.target.id]: event.target.value,
        //객체의 키에 들어가는 []는 배열이 아님. []안의 단어 자체가 contents, title,writer로 변경
      }
    );
  };

  /*writer: inputs.writer,
      title: inputs.title,
      contents: inputs.contents,*/

  return (
    <div>
      <hr></hr>
      작성자
      <input
        id="writer"
        type="text"
        placeholder="작성자를 입력하세요"
        onChange={onChange}
      ></input>
      <br></br>
      제목
      <input
        id="title"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onChange}
      ></input>
      <br></br>
      내용
      <input
        id="contents"
        type="text"
        placeholder="내용을 입력하세요"
        onChange={onChange}
      />
      <button onClick={onClickSubmit}>graphQL-API요청</button>
      <hr></hr>
    </div>
  );
}
