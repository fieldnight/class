//section16/16-01-comment-edit3 refactor with this file :리스트 내 특정 댓글 수정 기능
//기존 컴포넌트에서 useState 초기값에 10개의 배열을 그리는 대신 => map의 특성을 이용, 컴포넌트 분리 후 useState 작성 =import=> 10개의 CommentItem 생성
import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  const myStyles = { margin: "10px", padding: "10px 0" };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el._id}번 게시물 </span>
          <span style={myStyles}>제목: {props.el.title}</span>
          <span style={myStyles}>작성자: {props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <div>
          <input style={{ margin: "5px", padding: "0 50px" }} type="text" />
        </div>
      )}
    </div>
  );
}

//해당 페이지에 el을 그려주기 위해서 el을 props로 넘겨받는다.
