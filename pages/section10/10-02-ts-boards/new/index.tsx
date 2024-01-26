import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

export default function GraphqlMutationPage( /*해당 페이지에 props는 없다.*/) {
  return (
    <>
      <div>이곳은 페이지입니다. </div>
      <BoardWrite isEdit={false} />
    </>
  );
}
