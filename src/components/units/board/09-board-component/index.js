//src 컴포넌트 재사용화
export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목:
      <input type="text" />
      <br />
      작성자:
      <input type="text" />
      <br />
      내용:
      <input type="text" />
      <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}

/*컴포넌트 부품 하나를 <></>로만 묶으면 안돼는 이유? 
예) A파일로 import시 <></>를 제외한 내부 내용만 옮겨간다. 이때 기존의 CSS는 무시하고 A파일에 있던 CSS를 덮어쓰게 된다 
(CSS 충돌)을 방지하기 위해 컴포넌트에는 가급적 벽을 쳐서 구간을 나눈다. 
*/




import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function GraphqlMutationPage() {
  return (
    <>
      <div>이곳은 페이지입니다, </div>
      <BoardWrite />
    </>
  );
}
