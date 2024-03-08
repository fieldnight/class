import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { mySchema } from "./01-after.validation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  /*  boardAddress: {
    addressDetail: string;
  };
*/
}
//state 사용 시 초깃값에 의해 타입 자동 추론O 그러나 아닐 경우 타입은 직접 지정 필요.

export default function graphQLInputPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    //{...}=> 각각 검증기능, 폼에 데이터 전달하는 기능, 에러메세지 띄우는 기능
    resolver: yupResolver(mySchema), //=> 검증할 조건을 ()안에다 넣는다.
    mode: "onChange", //=> 입력 하나하나 할 때 마다 에러를 띄운다. 말 그대로 검증모드선택!
  });
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
      작성자 <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>
        {formState.errors.writer?.message}
      </div>{" "}
      {/*writer에 에러가 없을 수도 있기에 옵셔널 체이닝으로 처리  */}
      <br></br>
      제목
      <input type="text" {...register("title")}></input>
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br></br>
      내용
      <input type="text" {...register("contents")}></input>
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/*주소
      <input type="text" {...register("boardAddress.addressDetail")}></input>*/}
      <Button01 title="등록하기" isActive={formState.isValid}></Button01>
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
