import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    // 컴퓨터 메모리에 백엔드에서 받아온 데이터 임시 저장.
  });

  //GraphQL setting

  return (
    <>
      <div>app.js의 컴포넌트 시작부분입니다. </div>
      <ApolloProvider client={client}>
        {" "}
          위의 client. 문자 바꿔도 됨
          <br></br>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>app.js의 컴포넌트 끝부분입니다. </div>
    </>
  );

  //위의 설정을 <Apollo전달자에 감싸서>컴포넌트에 전달해줘야한다.
}

//#region notice
/*
1. url이 아닌 uri. 
2. uri은 받아온 데이터를 저장해놓으려는 성격을 지닌다. 
3. cache에 저장하고 필요할때마다 꺼내온다. 파일 혹은 컴퓨터 메모리에 저장 가능하다. 
4. 사실, yarn dev해서 index.js로 접근했을떄, index.js가 실행되는 게 아닌, <component {...pageProps}/>의 부분에 index.js의 코드가 통째로 옮겨와서 app.js 페이지가 실행되는 것!!!!

5. index.js 페이지 윗부분의 export default의 목적지는 바로 여기 app.js.component
6.  <div>app.js의 컴포넌트 시작/끝 부분입니다. </div> 는 실제로 렌딩페이지의 앞뒤로 index.js를 감싸서 나타난다. 

7. react는 컴포넌트 조립방식이다. 바닐라 js에서는 index 하나 당 페이지였다면 react에서는 여러 기능으로 잘게 쪼개진 index를 조립하여 최종적으로 페이지를 구현한다. import / export를 통해서 ! 
 */

//#endregion
