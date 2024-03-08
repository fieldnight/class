import { useState } from "react";

export default function graphQLInputPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //useState => useForm (register, handleSubmit)을 통한 리팩토링

  const onClickSubmit = async () => {};

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
