export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>숫자 올리기!</button>
      <button onClick={onClickCountDown}>숫자 내리기!</button>
    </div>
  );
}

//위에서 한줄씩 작성하지 않고 구조를 잡고 안에서부터 채워나가는 방식
