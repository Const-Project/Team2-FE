import styled from "@emotion/styled";
import LoginHeader from "../widgets/LoginHeader";
import AcountContainer from "../widgets/AcountContainer";

const Wrapper = styled.div`
  max-width: 1440px;
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
`;

const HeaderWrapper = styled.div`
  flex-shrink: 0; /* Header 크기를 유지 */
`;

const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  display: flex;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
`;

const ForgotPage = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <LoginHeader />
      </HeaderWrapper>
      <ContentWrapper>
        <AcountContainer
          largeLetter="Forgot Password?"
          smallLetter="Quick & Simple way to find your password"
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default ForgotPage;
