//#region graphQL를 이용해 Be로 사용자인풋데이터 넘기기
/* 
1. 아폴로에서 그래픽큐얼과 gql?을 임포트해야함
2. mutation (그래픽큐얼)을 통해 변경할 값을 전달할 식을 적어야 함. 그래픽큐얼의 변수는 $, 값 당 변수$지정과 문자형을 따로 지정한다. 
3. export default const ... = ()=> { return()} (page에 보이는 부분)에서 async/await 지정 후 내부에서 button에 호이스팅할 함수 하나, 해당 함수의 내부 로직 result와는 기존에 만들어뒀던 gql을 담은 변수를 연결한다. export 함수의 가장 처음에! const [내 함수] = useMutation {gqlSetting} 이렇게.



다시정리. 
임포트 {그래픽큐엘/쥐큐엘} from "@아폴로/그래픽큐엘"

쥐큐엘` mutation (name:string), const 지큐엘함수 = mutation (name:$name), number, id`

export default function page (){

  const [지큐엘함수] = useMutation[내 함수];

   const onClick = async () =>{

    const result = await 내힘수(
    {$(variables):{
       name:"훈이"}
    })
    console.log(result)

  }

    return (

        <button onclick={onclick}></button>
    )

}

*/

//#endregion

//보통 useState같은 훅은 아래서 사용하는 순간 위에 자동임포트 되는 편
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
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [나의함수] = useMutation(나의큐엘);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });

    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle = event.target.value;
  };

  const onChangeContents = (event) => {
    setContent = event.target.content;
  };

  return (
    <div>
      <hr></hr>
      작성자
      <input
        type="text"
        placeholder="작성자를 입력하세요"
        onChange={onChangeWriter}
      ></input>
      <br></br>
      제목
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
      ></input>
      <br></br>
      내용
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={onChangeContents}
      ></input>
      <button onClick={onClickSubmit}>graphQL-API요청</button>
      <hr></hr>
    </div>
  );
}
