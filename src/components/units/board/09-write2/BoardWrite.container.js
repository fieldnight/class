import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router.js";

import { MyQl, UPDATE_BOARD } from "./BoardWrite.queries.js/index.js";
import BoardWriteUI from "./BoardWrite.presenter.js";

export default function BoardWrite(props) {
  //ERROR: 함수 컴포넌트 내부에서 props를 사용하려면 해당 함수의 매개변수로 props를 명시해야 합니다. 또는 ES6의 구조 분해 할당을 이용하여 특정 속성만을 추출할 수도 있습니다.

  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [나의함수] = useMutation(MyQl);

  const [updateBoard] = useMutation(UPDATE_BOARD);

  //updateBoard의 객체화 : 객체화가 필요한 이유는 메모장에 작성

  const onClickUpdate = async () => {
    const myvariables = {
      number: Number(router.query.number),
    };
    if (writer /*!== "" 결국 생략해도 써도 둘 다 T/F임.*/) {
      //변경된 값이 없을 경우. 해당 비교군은 state함수이다.
      myvariables.writer = writer;
    }

    if (content) {
      myvariables.contents = content;
    }
    if (title) {
      myvariables.title = title;
    }

    const UpdateResult = await updateBoard({
      variables: myvariables,

      //단일값을 보내니 괄호를 쓰지 않아도 된다.
    });

    console.log(UpdateResult);
    router.push(
      `/section09/09-04-board/${UpdateResult.data.updateBoard.number}`
    );
  };

  //onClickUpdate는 블록 범위 변수

  const onClickSubmit = async () => {
    const SubmitResult = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });

    console.log(SubmitResult);
    router.push(
      `/section09/09-04-board/${SubmitResult.data.createBoard.number}`
    );

    // alert("error");
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <BoardWriteUI
        submit={onClickSubmit}
        update={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined이거나, data이거나 둘 중 하나!
      />
    </div>
  );
}
