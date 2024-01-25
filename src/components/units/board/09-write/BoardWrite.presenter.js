import { RedInput, BlueBtn } from "./BoardWrite.styles.js/index.js";

export default function BoardWriteUI(props) {
  return (
    <div>
      <hr></hr>
      작성자
      <RedInput
        type="text"
        placeholder="작성자를 입력하세요"
        onChange={props.writer}
      ></RedInput>
      <br></br>
      제목
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={props.title}
      ></input>
      <br></br>
      내용
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={props.content}
      ></input>
      <BlueBtn onClick={props.isEdit ? props.update : props.submit}>
        {props.isEdit ? "수정" : "등록"} 하기
      </BlueBtn>
      <hr></hr>
    </div>
  );
}

// UI 라 칭하기 했지만 해당 펑션 또한 하나의 고유한 컴포넌트이다.
