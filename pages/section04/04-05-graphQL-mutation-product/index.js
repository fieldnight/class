import { gql, useMutation } from "@apollo/client";

/* gql 적는 순서.
1. gql`` 
2. mutation{createBoards(req,req){res res}}
3.mutation <--여기에다가 타입을 지정해준다!!-->  {createBoards(req:$,req:$){res res}}
4. mutation {create(res){req}}
5. 주의 ! 변수 타입은 api 작성하는 사람 마음대로이니 playground를 잘 살피자. */

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function page() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "헤드셋",
          detail: "정말 좋은 헤드셋",
          price: 3000,
        },
      },
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}></button>
    </>
  );
}

//#region react.js에서 {}를 쓰는 경우.(1)(2)
/*
1. 바닐라 js에서 가져온 문법일때 
 리엑트에서는 jsx가 @babel라는 js 컴파일러를 통해 바닐라 js로 변경되는데, 이 과정에서 js 문법을 사용하기 위해서는 따로 mark를 해 주어야 한다. 이 마크업이 바로 {}인것! 

 2. export와 export default? 
 import 문을 작성할때 {}로 감싸는 이유는?
 해당 라이브러리나 컴포넌트 b 를 export할 때, export default로 된 것은 {}로 감싸지 않고, 일반 export 를 쓴 것은 import 때 {}로 감싸야한다. 두루뭉실하게 알고 있으면 되고, 하여튼 자세한 사항은 나중에 찾아보자! 
*/

//#endregion
