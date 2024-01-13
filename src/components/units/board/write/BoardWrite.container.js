import { useMutation } from "@apollo/client";
import { useState } from "react";

import { MyQl } from "./BoardWrite.queries.js";
import BoardWriteUI from "./BoardWrite.presenter.js";


export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [나의함수] = useMutation(MyQl);

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
    <BoardWriteUI
      submit={onClickSubmit}
      writer={onChangeWriter}
      title={onChangeTitle}
      content={onChangeContents}
    />
  );
}
