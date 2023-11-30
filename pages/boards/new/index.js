import {
  Mylayout,
  SideBar,
  Mytitle,
  Menu_box,
  Menu,
  Line1,
  Picked_menu,
  Picked_menu_line,
  Main_box,
  Question_box,
  Question_numbering,
  Question,
  Question_more,
  Bottom_bar,
  Bottom_image,
  Bottom_menu,
  Bottom_Box,
} from "../../../styles/its_road";

export default function Home() {
  return (
    <>
      <head>
        <title>게시판</title>
      </head>
      <Mylayout>
        <SideBar></SideBar>
        <Mytitle>마이</Mytitle>

        <Menu_box>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <Menu>
            <Picked_menu>
              FAQ<Picked_menu_line></Picked_menu_line>
            </Picked_menu>
          </Menu>
          <Menu>QNA</Menu>
        </Menu_box>
        <Line1></Line1>

        <Main_box>
          {" "}
          <Question_box>
            <Question_numbering>Q.01</Question_numbering>
            <Question>리뷰 작성은 어떻게 하나요?</Question>
          </Question_box>
          <Question_box>
            <Question_numbering>Q.02</Question_numbering>
            <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
          </Question_box>
          <Question_box>
            <Question_numbering>Q.03</Question_numbering>
            <Question>아이디/비밀번호를 잊어버렸어요</Question>
          </Question_box>
          <Question_box>
            <Question_numbering>Q.04</Question_numbering>
            <Question>회원탈퇴를 하고싶어요.</Question>
          </Question_box>
          <Question_box>
            <Question_numbering>Q.05</Question_numbering>
            <Question>출발지 설정은 어떻게 하나요?</Question>
          </Question_box>
          <Question_box>
            <Question_numbering>Q.06</Question_numbering>
            <Question>비밀번호를 변경하고 싶어요</Question>
          </Question_box>
        </Main_box>
        <Bottom_bar>
          <Bottom_Box>
            <Bottom_image></Bottom_image>
            <Bottom_menu>홈</Bottom_menu>
          </Bottom_Box>
          <Bottom_Box>
            <Bottom_image></Bottom_image>
            <Bottom_menu>잇츠로드</Bottom_menu>
          </Bottom_Box>
          <Bottom_Box>
            <Bottom_image></Bottom_image>
            <Bottom_menu>마이찜</Bottom_menu>
          </Bottom_Box>
          <Bottom_Box>
            <Bottom_image></Bottom_image>
            <Bottom_menu>마이</Bottom_menu>
          </Bottom_Box>
        </Bottom_bar>
      </Mylayout>
    </>
  );
}
