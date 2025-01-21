import Logo from "../components/Logo";
import LetterContainer from "../components/LetterContainer";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  margin-bottom: 152px;
`;

const LogoAndLetters: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <LetterContainer />
    </Wrapper>
  );
};

export default LogoAndLetters;
