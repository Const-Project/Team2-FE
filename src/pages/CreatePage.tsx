import styled from "@emotion/styled";
import LogoAndLetters from "../widgets/LogoAndLetter";
import AcountContainer from "../widgets/AcountContainer";
import LoginHeader from "../widgets/LoginHeader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  margin-top: 150px;
  gap: 133px;
  span {
    position: relative;
    top: -70px;
  }
`;

const LayOut = styled.div`
  max-width: 1440px; /* 최대 너비 설정 */
  width: 100%; /* 부모 너비에 맞춤 */
  height: 100vh; /* 전체 화면 높이 */
  display: flex; /* 플렉스 컨테이너 */
  flex-direction: column; /* 세로 방향 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  background-color: #5f4f46;
  margin: 0 auto; /* 가로 여백 자동으로 설정 */
`;

const CreatePage: React.FC = () => {
  return (
    <LayOut>
      <LoginHeader />
      <Wrapper>
        <LogoAndLetters />
        <span>
          <AcountContainer
            smallLetter="LET'S GET YOU STARTED"
            largeLetter="Create an Account"
          />
        </span>
      </Wrapper>
    </LayOut>
  );
};

export default CreatePage;
