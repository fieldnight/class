import axios from "axios";
//import 나만의페이지 from "../../section01/01-01-example"
export default function restGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/post/1");
    console.log(result); //promise 실행.
  }

  /* async function onCLickSync() {
    const result = await axios.get("https://koreanjson.com/post/1");
    console.log(result); //제대로된 결과   => but Var 과 function 함수는 중복선언방지가 안된다.. 
    //비동기 기다려! async await    
    console.log(result.data.title);*/

  const onCLickSync = async () => {
    const result = await axios.get("https://koreanjson.com/post/1"); //=> so 실무에서 화살표함수나 함수표현식을 사용한다.
    console.log(result); //제대로된 결과
    //비동기 기다려! async await
    console.log(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onCLickSync}>REST_API(동기)</button>
      // <나만의 페이지 />
    </>
  );
}
