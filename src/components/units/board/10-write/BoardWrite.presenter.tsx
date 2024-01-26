import { RedInput, BlueBtn } from "./BoardWrite.styles.js/index.js";
import { IBoardUIProps } from "./BoardWrite.types.js";

export default function BoardWriteUI(props : IBoardUIProps)/*'props' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.ts(7044) */ {
  return (
    <div>
      <hr></hr>
      작성자
      <RedInput
        type="text"
        placeholder="작성자를 입력하세요"
        onChange={props.onChangeWriter}
        defaultValue={props.data ? props.data.fetchBoard.writer : " "}
      ></RedInput>
      <br></br>
      제목
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      ></input>
      <br></br>
      내용
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={props.onChangeContents}
        defaultValue={props.data ? props.data.fetchBoard.contents : " "}
      ></input>
      <BlueBtn onClick={props.isEdit ? props.update : props.submit}>
        {props.isEdit ? "수정" : "등록"} 하기
      </BlueBtn>
      <hr></hr>
    </div>
  );
}

// UI 라 칭하기 했지만 해당 펑션 또한 하나의 고유한 컴포넌트이다.
