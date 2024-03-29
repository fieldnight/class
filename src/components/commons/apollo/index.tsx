//앱컴포넌트로부터 분리된 설정 라이브러리 연습

//fix: 파일명 오타 index,tsx => index.tsx

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    //example => practice로 주소 변경=> section15 미만 내용들이 작동하지 않을 수도 있음
    cache: new InMemoryCache(),
    // 컴퓨터 메모리에 백엔드에서 받아온 데이터 임시 저장.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
