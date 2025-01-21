import styled from "@emotion/styled";
import LogoAndLetters from "../widgets/LogoAndLetter";
const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background-color: #5f4f46;
`;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <LogoAndLetters />
    </Wrapper>
  );
};

export default LoginPage;
