import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import LayOut from "../src/components/commons/layout";

export default function App({ Component }: AppProps): JSX.Element {
  //아폴로 클라이언트란 설정을 클라이언트에 저장하고, 이걸 아폴로 프로바이더에 넘겨주므로서 이 자식들이 유즈쿼리, 유즈뮤테이션을 쓸 수 있게 된다. 아폴로 라이브러리의 설정들을 앱 컴포넌트에서 직접 적용하고 있는데, 나중에 이런 설정 라이브러리가 굉장히 많아져서 하나하나 입력하는 방식을 계속 쓰게 되면 앱 컴포넌트의 가독성과 효율성이 떨어지게 된다. => 목적이 유사한 라이브러리끼리 묶어서 새로운 컴포넌트로 분리한 후, "쏙 들어오기, 떙겨오기 전법,,"으로 가져오자.

  //GraphQL setting
  return (
    <>
      <div>_____________app.js의 컴포넌트 시작부분입니다.____________ </div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <LayOut>
            <Component />
          </LayOut>
        </>
      </ApolloSetting>

      <div>______________app.js의 컴포넌트 끝부분입니다.____________ </div>
    </>
  );

  //위의 설정을 <Apollo전달자에 감싸서!!>컴포넌트에 전달해줘야한다.
}

/*
1. url이 아닌 uri. 
2. uri은 받아온 데이터를 저장해놓으려는 성격을 지닌다. 
3. cache에 저장하고 필요할때마다 꺼내온다. 파일 혹은 컴퓨터 메모리에 저장 가능하다. 
4. 사실, yarn dev해서 index.js로 접근했을떄, index.js가 실행되는 게 아닌, <component {...pageProps}/>의 부분에 index.js의 코드가 통째로 옮겨와서 app.js 페이지가 실행되는 것!!!!

5. index.js 페이지 윗부분의 export default의 목적지는 바로 여기 app.js.component
6.  <div>app.js의 컴포넌트 시작/끝 부분입니다. </div> 는 실제로 렌딩페이지의 앞뒤로 index.js를 감싸서 나타난다. 

7. react는 컴포넌트 조립방식이다. 바닐라 js에서는 index 하나 당 페이지였다면 react에서는 여러 기능으로 잘게 쪼개진 index를 조립하여 최종적으로 페이지를 구현한다. import / export를 통해서 ! 
 */
