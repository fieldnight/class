import axios from "axios";
import { useEffect } from "react";

export default function restGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const OnClickSync = async (): Promise<void>=>{const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(result);
    console.log(result.data.message);
     
  }, []);


  

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onCLickSync}>REST_API(동기)</button>
      // <나만의 페이지 />
    </>
  );

  //button 클릭하면 doc api 위 주소로 요청! => 받아온 결과를 result에 담는다.
};