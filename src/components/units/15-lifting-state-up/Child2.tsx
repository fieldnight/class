//15-04-lifting-up의 자식1 (refactor:02-01-counter useState.ver)
//부모의 useState를 props로 넘겨받아 자식끼리 소통 (with Child1)

export default function Child2(props: any) {
  return (
    <>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={props.onClickUp}>카운터 증가</button>
    </>
  );
}
