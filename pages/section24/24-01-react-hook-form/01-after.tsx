import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}
//state 사용 시 초깃값에 의해 타입 자동 추론O 그러나 아닐 경우 타입은 직접 지정 필요.

export default function graphQLInputPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();
  // register안에 writer, setWriter, onChangeWriter가 다 들어가 있다고 보면 된다.

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };
  //void는 return타입
  //data의 타입은 IFormData에 명시되어있음.

  //button 클릭 => 폼의 onSubmit 실행=> onClickSubmit는 handleSubmit으로부터 writer title contents에 관련된 data를 전달받는다.

  console.log(
    "setState 작동 X => 리렌더링 X => 빠르다! section27: 24-01-react-hook-form 27:06"
  );

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      <hr></hr>
      작성자
      <input type="text" {...register("writer")}></input>
      {/* register야 이름을 writer로 해서 뿌려줘*/}
      <br></br>
      제목
      <input type="text" {...register("title")}></input>
      <br></br>
      내용
      <input type="text" {...register("contents")}></input>
      주소
      <input type="text" {...register("boardAddress.addressDetail")}></input>
      <button>GRAPHQL-API요청</button>
      <hr></hr>
    </form>
  );
}

// 생략: placeholder="내용을 입력하세요"

//생략: handleSubmit 앞 wrapAsync

/* <button type="reset">해당 폼 내의 내용이 지워짐</button>
<button type="submit">해당 폼 내의 내용 등록</button> <= 기본값
<button type="button" onClick={onClickBasket}> 장바구니 담기 </button> <= 기본값인 onClickSubmit이 실행되는 대신 onClick={}만 실행되는 타입. 기본값과 연결을 끊어줌
 */
