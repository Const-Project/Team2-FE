import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 83px;
  padding-top: 37px;
`;

const LOGO = styled.img``;

const LogoWrapper = styled.div`
  font-size: 20px;
  display: flex;
  color: white;
  gap: 7px;

  span {
    position: relative;
    top: 10px;
  }
`;

const SignUp = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 12px 40px;
  margin-right: 83px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #5f4f46;
    border-color: #5f4f46;
    transition: all 0.3s ease;
  }
`;

const LoginHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CreatePage");
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <LOGO src="CPLogo.png"></LOGO>
        <span>Const Future</span>
      </LogoWrapper>
      <SignUp onClick={handleClick}>Sign UP</SignUp>
    </Wrapper>
  );
};

export default LoginHeader;
