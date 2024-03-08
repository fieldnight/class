import * as yup from "yup";

export const mySchema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("제목를 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  //writerError , setWriterError , onChangeWriterError 이런 것들을 if로 검증하는 로직이 한줄에 다 들어가 있다.

  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다")
    .required("이메일은 필수 입력입니다"),
  //검증 2개 추가 => if문이 2개 추가되는 셈

  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력입니다."),

  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 형식이 알맞지 않습니다.")
    .required("전화번호는 필수 입력입니다. "),
  //정규표현식: ^:시작 $:끝 \d:숫자 {..}:조건
  //전화번호는 정규표현식에 매칭이 되는 지를 이곳에서 검증 가능하다. (3-4-4 형식의 문자열의 정규 표현식에 매칭이 되는가?)
});
// => 이로서 검증은  schema로 빠지고, 로직은 form(onSubmit(handle..))로 빠져 분리 => 유지보수가 쉽다.
