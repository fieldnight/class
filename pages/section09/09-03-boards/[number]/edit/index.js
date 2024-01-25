import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite.container";

export default function GraphqlMutationPage(props) {
  return (
    <>
      <div>수정하기 페이지 입니다. </div>
      <BoardWrite isEdit={true} />
    </>
  );
}
