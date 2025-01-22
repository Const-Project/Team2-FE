import styled from "@emotion/styled";
import LogoAndLetters from "../widgets/LogoAndLetter";
import AcountContainer from "../widgets/AcountContainer";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 900px;
  background-color: #5f4f46;
  align-items: center;
  gap: 133px;
`;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <LogoAndLetters />
      <AcountContainer />
    </Wrapper>
  );
};

export default LoginPage;
