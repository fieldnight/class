import axios from "axios";
//import 나만의페이지 from "../../section01/01-01-example"
export default function restGetPage() {
  const onCLickSync = async () => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random"); //=> so 실무에서 화살표함수나 함수표현식을 사용한다.
    console.log(result); //제대로된 결과
    //비동기 기다려! async await
    console.log(result.data.message); //사진 주소 =>사진은 보통 주소, 주소로부터 사진을 다운받아서 보여준다. 
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onCLickSync}>REST_API(동기)</button>
      // <나만의 페이지 />
    </>
  );

  //button 클릭하면 doc api 위 주소로 요청! => 받아온 결과를 result에 담는다.
}
