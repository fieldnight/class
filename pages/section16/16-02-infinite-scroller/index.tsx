//08-02 DB 주소 변경 : ( 08:example => 15: practice)
import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// number => id 변경

export default function StaticRoutedPage(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      //fetchMore가 DB에 요청 후 updateQuery까지 진행되는데, 기다리고 싶을 경우 비동기 사용
      variables: {
        page:
          /* 다음페이지*/ Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      //..length => 맵으로 뿌린 배열에 몇개가 들어있는지 알 수 있음.
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards === undefined) {
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const myStyles = { margin: "10px", padding: "10px 0" };
  const scrollBox = {
    border: "1px solid black",
    height: "700px",
    width: "&00px",
    overflow: "auto",
    //☆overflow auto로 설정 시 자동으로 div 내 스크롤 생성☆
  };

  return (
    <div style={scrollBox}>
      <InfiniteScroll
        useWindow={false} //윈도우의 기본 스크롤 사용 여부
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el._id}번 게시물 </span>
            <span style={myStyles}>제목: {el.title}</span>
            <span style={myStyles}>작성자: {el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

/*라이브러리를 js로 만든 상태라 ts로 변경 필요: yarn add --dev @types/react-infinite-scroller 
현재로는 ts로 자체 변경 완료. 



items는 가장 바깥 컴포넌트 => 현재로선 map 뜻함 map안의 각각 내용들이 item.

export default function StaticRoutedPage() {
  const { data, fetchMore} = useQuery<...>
  refetch: 새로고침
  fetchMore:기존 내용 + 새 내용 덧붙이기
*/
